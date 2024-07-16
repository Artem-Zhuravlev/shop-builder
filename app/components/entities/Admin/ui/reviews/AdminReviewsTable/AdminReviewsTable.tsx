'use client';
import { StatusLabel, type Status } from '@features/tables';
import { useFormattedDate } from '@hooks/useFormattedDate';
import { ButtonBase } from '@shared/ButtonBase';
import {
	defaultSortIcon,
	defaultTableStyles,
} from '@shared/TableBase/TableBase';
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

export interface AdminReviewsTableItem extends TableNode {
	id: string | number;
	product: string;
	author: string;
	rating: number;
	status: Status;
	date_added: string;
	slug: string;
}

interface AdminReviewsTableProps {
	nodes: AdminReviewsTableItem[];
}

export const AdminReviewsTable: FC<AdminReviewsTableProps> = (props) => {
	const { nodes } = props;
	const data = { nodes };
	const t = useTranslations();
	const router = useRouter();
	const theme = useTheme({
		...getTheme(),
		Table:
			'--data-table-library_grid-template-columns:  50px 3fr 2fr 1fr 1fr 2fr 150px;',
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
				PRODUCT: (array) =>
					array.sort((a, b) => a.product.localeCompare(b.product)),
				AUTHOR: (array) =>
					array.sort((a, b) => a.author.localeCompare(b.author)),
				RATING: (array) => array.sort((a, b) => a.rating - b.rating),
				STATUS: (array) =>
					array.sort((a, b) => a.status.localeCompare(b.status)),
				DATE_ADDED: (array) =>
					array.sort((a, b) => a.date_added.localeCompare(b.date_added)),
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
			{(tableList: AdminReviewsTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='PRODUCT'>
								{t('base.product')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='AUTHOR'>
								{t('base.author')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='RATING'>
								{t('base.rating')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='STATUS'>
								{t('base.status')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='DATE_ADDED'>
								{t('base.date_added')}
							</HeaderCellSort>
							<HeaderCell>{t('admin.action')}</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.map((item) => (
							<Row item={item} key={item.id}>
								<CellSelect item={item} />
								<Cell>{item.product}</Cell>
								<Cell>{item.author}</Cell>
								<Cell>{item.rating}</Cell>
								<Cell>
									<StatusLabel value={item.status} />
								</Cell>
								<Cell>{useFormattedDate(item.date_added)}</Cell>
								<Cell>
									<ButtonBase
										onClick={() => router.push(`/admin/reviews/${item.slug}`)}
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

AdminReviewsTable.displayName = 'AdminReviewsTable';
