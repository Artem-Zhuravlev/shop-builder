'use client';
import React, { useEffect, useMemo, useState, type FC } from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import {
	AdminCountriesTable,
	AdminCountriesFilter,
} from '@/components/entities/Admin';
import { Paginate } from '@/components/shared/Paginate';
import {
	deleteApiCountry,
	getApiCountries,
} from '@/components/shared/api/admin';
import type { CountriesInterface } from '@interfaces/index';
import { SkeletonTable } from '@/components/shared/SkeletonTable';
import { selectSettings, useSelector } from '@/lib/redux';
import { DEFAULT_ITEMS_PER_PAGE } from '@/utils/settings/paginate/paginateSettings';
import useLocalStorage from '@/hooks/useLocalStorage';

export const AdminCountriesLayout: FC = () => {
	const { default_items_per_page_admin } = useSelector(selectSettings) || {}; // Provide fallback as an empty object
	const [nodes, setNodes] = useState<CountriesInterface[] | null>(null);
	const [totalItems, setTotalItems] = useState<number>(0);
	const [currentPage, setCurrentPage] = useLocalStorage('country_page', 1);
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

	const handleDeleteCountries = async (ids: number[]) => {
		if (!nodes) return;

		try {
			const updatedNodes = nodes.filter((node) => !ids.includes(node.id));
			setNodes(updatedNodes);

			await deleteApiCountry(ids);
		} catch (e) {
			throw new Error('An unknown error occurred while deleting country.');
		}
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<AdminTableLayout filter={<AdminCountriesFilter />}>
			{nodes ? (
				<AdminCountriesTable nodes={nodes} onDelete={handleDeleteCountries} />
			) : (
				<SkeletonTable rows={itemsPerPage} cellsGrid={'1fr 1fr 1fr'} />
			)}
			<Paginate
				pageSize={itemsPerPage}
				current={currentPage}
				total={totalItems}
				onChange={handlePageChange}
			/>
		</AdminTableLayout>
	);
};
