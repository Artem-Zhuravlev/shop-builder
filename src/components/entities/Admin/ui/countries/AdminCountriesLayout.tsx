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
	const [filterParams, setFilterParams] = useState<CountriesInterface | null>(
		null,
	);

	useEffect(() => {
		fetchCountries(currentPage, filterParams);
	}, [currentPage, filterParams]);

	const fetchCountries = async (
		offset: number,
		filters: CountriesInterface | null,
	) => {
		const { country, iso_code_2, iso_code_3 } = filters || {};

		try {
			const { data, total } = await getApiCountries(
				offset,
				itemsPerPage,
				country ?? undefined,
				iso_code_2 ?? undefined,
				iso_code_3 ?? undefined,
			);
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

	const handleFilteredCountries = async (value: CountriesInterface) => {
		setFilterParams({ ...value });
		setCurrentPage(1);
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<AdminTableLayout
			filter={<AdminCountriesFilter onFilter={handleFilteredCountries} />}
		>
			{nodes ? (
				<>
					<AdminCountriesTable nodes={nodes} onDelete={handleDeleteCountries} />
					<Paginate
						pageSize={itemsPerPage}
						current={currentPage}
						total={totalItems}
						onChange={handlePageChange}
					/>
				</>
			) : (
				<SkeletonTable rows={itemsPerPage} cellsGrid={'1fr 1fr 1fr'} />
			)}
		</AdminTableLayout>
	);
};
