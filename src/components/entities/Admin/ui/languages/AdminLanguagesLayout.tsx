'use client';
import React, { useEffect, useMemo, useState, type FC } from 'react';
import { AdminTableLayout } from '@/components/widgets/AdminTableLayout';
import { AdminLanguagesTable } from '@/components/entities/Admin';
import { Paginate } from '@/components/shared/Paginate';
import type { LanguagesInterface } from '@interfaces/index';
import { SkeletonTable } from '@/components/shared/SkeletonTable';
import { selectSettings, useSelector } from '@/lib/redux';
import { DEFAULT_ITEMS_PER_PAGE } from '@/utils/settings/paginate/paginateSettings';
import useLocalStorage from '@/hooks/useLocalStorage';
import {
	getApiLanguages,
	deleteApiLanguage,
} from '@/components/shared/api/admin';

export const AdminLanguagesLayout: FC = () => {
	const { default_items_per_page_admin } = useSelector(selectSettings) || {}; // Provide fallback as an empty object
	const [nodes, setNodes] = useState<LanguagesInterface[] | null>(null);
	const [totalItems, setTotalItems] = useState<number>(0);
	const [currentPage, setCurrentPage] = useLocalStorage('country_page', 1);
	const itemsPerPage = default_items_per_page_admin ?? DEFAULT_ITEMS_PER_PAGE;

	useEffect(() => {
		fetchLanguages(currentPage);
	}, [currentPage]);

	const fetchLanguages = async (offset: number) => {
		try {
			const { data, total } = await getApiLanguages(offset, itemsPerPage);
			setNodes(data);
			setTotalItems(total);
		} catch (e) {
			console.error('Failed to fetch languages:', e);
		}
	};

	const handleDeleteLanguages = async (ids: number[]) => {
		if (!nodes) return;

		try {
			const updatedNodes = nodes.filter((node) => !ids.includes(node.id));
			setNodes(updatedNodes);

			await deleteApiLanguage(ids);
		} catch (e) {
			throw new Error('An unknown error occurred while deleting country.');
		}
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<AdminTableLayout>
			{nodes ? (
				<>
					<AdminLanguagesTable nodes={nodes} onDelete={handleDeleteLanguages} />
				</>
			) : (
				<SkeletonTable rows={itemsPerPage} cellsGrid={'1fr 1fr 1fr'} />
			)}

			{totalItems > itemsPerPage && (
				<Paginate
					pageSize={itemsPerPage}
					current={currentPage}
					total={totalItems}
					onChange={handlePageChange}
				/>
			)}
		</AdminTableLayout>
	);
};
