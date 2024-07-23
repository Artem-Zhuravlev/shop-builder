'use client';
import { ButtonBase } from '@shared/ButtonBase';
import { useFormattedDate } from '@hooks/useFormattedDate';
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
import { ADMIN_ROUTES } from '@constants/admin-routes.constants';

export interface AdminCustomersTableItem extends TableNode {
	id: string | number;
	name: string;
	email: string;
	customer_group: string;
	date_added: string;
	slug: string;
}

interface AdminCustomersTableProps {
	nodes: AdminCustomersTableItem[];
}

export const AdminCustomersTable: FC<AdminCustomersTableProps> = (props) => {
	const { nodes } = props;
	const data = { nodes };
	const t = useTranslations('admin');
	const router = useRouter();
	const theme = useTheme({
		...getTheme(),
		Table:
			'--data-table-library_grid-template-columns:  50px 2fr 2fr 1fr 1fr 150px;',
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
				NAME: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
				EMAIL: (array) => array.sort((a, b) => a.email.localeCompare(b.email)),
				CUSTOMER_GROUP: (array) =>
					array.sort((a, b) =>
						a.customer_group.localeCompare(b.customer_group),
					),
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
			{(tableList: AdminCustomersTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='NAME'>
								{t('customer_name')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='EMAIL'>{t('email')}</HeaderCellSort>
							<HeaderCellSort sortKey='CUSTOMER_GROUP'>
								{t('customer_group')}
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
								<Cell>{item.name}</Cell>
								<Cell>{item.email}</Cell>
								<Cell>{item.customer_group}</Cell>
								<Cell>{useFormattedDate(item.date_added)}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`${ADMIN_ROUTES.customers}/${item.slug}`)
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

AdminCustomersTable.displayName = 'AdminCustomersTable';
