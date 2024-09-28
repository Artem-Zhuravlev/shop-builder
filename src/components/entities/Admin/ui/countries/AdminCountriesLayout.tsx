'use client';
import React, { useCallback, useEffect, useState, type FC } from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import {
	AdminCountriesTable,
	AdminCountriesFilter,
} from '@/components/entities/Admin';
import { PaginateBase } from '@/components/shared/PaginateBase';
import { getApiCountries } from '@/components/shared/api/admin';
import type { CountriesInterface } from '@interfaces/index';
import { SkeletonTable } from '@/components/shared/SkeletonTable';
import { selectSettings, useSelector } from '@/lib/redux';
import { DEFAULT_ITEMS_PER_PAGE } from '@/utils/settings/paginate/paginateSettings';

export const AdminCountriesLayout: FC = () => {
	const { default_items_per_page_admin } = useSelector(selectSettings) || {}; // Provide fallback as an empty object

	const [nodes, setNodes] = useState<CountriesInterface[] | null>(null);
	const [totalItems, setTotalItems] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage = default_items_per_page_admin ?? DEFAULT_ITEMS_PER_PAGE;

	useEffect(() => {
		fetchCountries(currentPage);
	}, [currentPage]);

	const fetchCountries = async (offset: number) => {
		try {
			const { data, total } = await getApiCountries(offset, itemsPerPage);
			setNodes(data);
			setTotalItems(total);
		} catch (e) {
			console.error('Failed to fetch countries:', e);
		}
	};

	const pageCount = useCallback(() => {
		return Math.ceil(totalItems / itemsPerPage);
	}, [totalItems, itemsPerPage]);

	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected + 1);
	};

	return (
		<AdminTableLayout filter={<AdminCountriesFilter />}>
			{nodes ? (
				<AdminCountriesTable nodes={nodes} />
			) : (
				<SkeletonTable rows={itemsPerPage} cellsGrid={'1fr 1fr 1fr'} />
			)}

			{totalItems > 0 && (
				<PaginateBase pageCount={pageCount()} onPageChange={handlePageChange} />
			)}
		</AdminTableLayout>
	);
};
