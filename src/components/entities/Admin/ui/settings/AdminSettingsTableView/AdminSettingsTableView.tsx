'use client';
import { AdminTableNavbar } from '../../AdminTableNavbar/AdminTableNavbar';
import { AdminSettingsTable } from '../AdminSettingsTable/AdminSettingsTable';
import { AdminTableLayout } from '../../AdminTableLayout/AdminTableLayout';
import { PaginateBase } from '@/components/shared/PaginateBase';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import type { SettingsInterface } from '@interfaces/settings';
import { getApiSettings } from '@/components/shared/api/admin';
import { SkeletonTable } from '@/components/shared/SkeletonTable';
import type { Action } from '@table-library/react-table-library/types/common';

export const AdminSettingsTableView = () => {
	const [tableData, setTableData] = useState<SettingsInterface[] | null>(null);
	const [selectedIds, setSelectedIds] = useState<number[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const t = useTranslations();

	const fetchApiSettings = async () => {
		try {
			setIsLoading(true);
			const data = await getApiSettings();
			setTableData(data);
		} catch (error) {
			console.error('Error fetching API settings:', error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchApiSettings();
	}, []);

	const onSelectRow = (action: Action) => {
		console.log(action.payload);
	};

	const handleDeleteTableRow = () => {};

	return (
		<AdminTableLayout
			navbar={
				<AdminTableNavbar
					isDeleteBtn={selectedIds.length > 0}
					route='/admin/settings'
					title={t('admin.settings')}
					onDelete={handleDeleteTableRow}
				/>
			}
			footer={<PaginateBase pageCount={5} />}
		>
			{isLoading ? (
				<SkeletonTable cellsGrid='1fr 2fr' rows={2} />
			) : (
				<AdminSettingsTable nodes={tableData || []} onSelect={onSelectRow} />
			)}
		</AdminTableLayout>
	);
};
