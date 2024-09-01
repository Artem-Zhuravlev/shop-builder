'use client';
import { ADMIN_ROUTES } from '@/constants/admin-routes.constants';
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
interface AdminOrderStatusTableItem extends TableNode {
	id: string | number;
	order_status_name: string;
	slug: string;
}

interface AdminOrderStatusTableProps {
	nodes: AdminOrderStatusTableItem[];
}

export const AdminOrderStatusTable: FC<AdminOrderStatusTableProps> = (
	props,
) => {
	const { nodes } = props;
	const data = { nodes };
	const t = useTranslations('admin');
	const router = useRouter();
	const theme = useTheme({
		...getTheme(),
		Table: '--data-table-library_grid-template-columns:  50px 1fr 150px;',
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
				ORDER_STATUS_NAME: (array) =>
					array.sort((a, b) =>
						a.order_status_name.localeCompare(b.order_status_name),
					),
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
			{(tableList: AdminOrderStatusTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='ORDER_STATUS_NAME'>
								{t('order_status_name')}
							</HeaderCellSort>
							<HeaderCell>{t('action')}</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.map((item) => (
							<Row item={item} key={item.id}>
								<CellSelect item={item} />
								<Cell>{item.order_status_name}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`${ADMIN_ROUTES.orderStatuses}/${item.slug}`)
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

AdminOrderStatusTable.displayName = 'AdminOrderStatusTable';
