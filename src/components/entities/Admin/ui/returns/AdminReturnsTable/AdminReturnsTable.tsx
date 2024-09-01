'use client';
import { ADMIN_ROUTES } from '@/constants/admin-routes.constants';
import { StatusLabel, type Status } from '@/components/features/tables';
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

export interface AdminReturnsTableItem extends TableNode {
	id: string | number;
	return_id: number;
	order_id: number;
	customer: string;
	product: string;
	status: Status;
	model: string;
	date_added: string;
}

interface AdminReturnsTableProps {
	nodes: AdminReturnsTableItem[];
}

export const AdminReturnsTable: FC<AdminReturnsTableProps> = (props) => {
	const { nodes } = props;
	const data = { nodes };
	const t = useTranslations('admin');
	const router = useRouter();
	const theme = useTheme({
		...getTheme(),
		Table:
			'--data-table-library_grid-template-columns:  50px 1fr 1fr 1fr 1fr 1fr 1fr 150px;',
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
				RETURN_ID: (array) => array.sort((a, b) => a.return_id - b.return_id),
				ORDER_ID: (array) => array.sort((a, b) => a.order_id - b.order_id),
				PRODUCT: (array) =>
					array.sort((a, b) => a.product.localeCompare(b.product)),
				MODEL: (array) => array.sort((a, b) => a.model.localeCompare(b.model)),
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
			{(tableList: AdminReturnsTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='RETURN_ID'>
								{t('return_id')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='ORDER_ID'>
								{t('order_id')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='PRODUCT'>{t('product')}</HeaderCellSort>
							<HeaderCellSort sortKey='MODEL'>{t('model')}</HeaderCellSort>
							<HeaderCellSort sortKey='STATUS'>{t('status')}</HeaderCellSort>
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
								<Cell>{item.return_id}</Cell>
								<Cell>{item.order_id}</Cell>
								<Cell>{item.product}</Cell>
								<Cell>{item.model}</Cell>
								<Cell>
									<StatusLabel value={item.status} />
								</Cell>
								<Cell>{useFormattedDate(item.date_added)}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`${ADMIN_ROUTES.returns}/${item.return_id}`)
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

AdminReturnsTable.displayName = 'AdminReturnsTable';
