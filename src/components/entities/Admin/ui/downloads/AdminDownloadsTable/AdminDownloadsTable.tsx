'use client';
import { ADMIN_ROUTES } from '@/constants/admin-routes.constants';
import { useFormattedDate } from '@/hooks/useFormattedDate';
import { ButtonBase } from '@/components/shared/ButtonBase';
import {
	defaultSortIcon,
	defaultTableStyles,
} from '@/components/shared/TableBase/TableBase';
import type { TableNode } from '@table-library/react-table-library';
import { getTheme } from '@table-library/react-table-library/baseline';
import {
	CellSelect,
	HeaderCellSelect,
	useRowSelect,
} from '@table-library/react-table-library/select';
import {
	HeaderCellSort,
	useSort,
} from '@table-library/react-table-library/sort';
import {
	Body,
	Cell,
	Header,
	HeaderCell,
	HeaderRow,
	Row,
	Table,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { type FC } from 'react';

interface AdminDownloadsTableItem extends TableNode {
	id: string | number;
	download_name: string;
	date_added: string;
	slug: string;
}

interface AdminDownloadsTableProps {
	nodes: AdminDownloadsTableItem[];
}

export const AdminDownloadsTable: FC<AdminDownloadsTableProps> = (props) => {
	const { nodes } = props;
	const data = { nodes };
	const t = useTranslations('admin');
	const router = useRouter();
	const theme = useTheme({
		...getTheme(),
		Table: '--data-table-library_grid-template-columns:  50px 1fr 1fr 150px;',
		...defaultTableStyles,
	});

	const sort = useSort(
		data,
		{
			onChange: onSortChange,
		},

		{
			sortIcon: { ...defaultSortIcon },
			sortFns: {
				DOWNLOAD_NAME: (array) =>
					array.sort((a, b) => a.download_name.localeCompare(b.download_name)),
				DATE_ADDED: (array) =>
					array.sort((a, b) => a.date_added - b.date_added),
			},
		},
	);

	const select = useRowSelect(data, {
		onChange: onSelectChange,
	});

	function onSortChange(action: any, state: any) {
		console.log(action, state);
	}

	function onSelectChange(action: any, state: any) {
		console.log(action, state);
	}

	return (
		<Table
			data={data}
			theme={theme}
			layout={{ custom: true }}
			sort={sort}
			select={select}
		>
			{(tableList: AdminDownloadsTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='DOWNLOAD_NAME'>
								{t('download_name')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='DATE_ADDED'>
								{t('date_added')}
							</HeaderCellSort>
							<HeaderCell>{t('action')}</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.map((item) => (
							<Row item={item} key={item.id}>
								<CellSelect item={item} />
								<Cell>{item.download_name}</Cell>
								<Cell>{useFormattedDate(item.date_added)}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`${ADMIN_ROUTES.downloads}/${item.slug}`)
										}
									>
										<span className='icon-pencil' />
									</ButtonBase>
								</Cell>
							</Row>
						))}
					</Body>
				</>
			)}
		</Table>
	);
};

AdminDownloadsTable.displayName = 'AdminDownloadsTable';
