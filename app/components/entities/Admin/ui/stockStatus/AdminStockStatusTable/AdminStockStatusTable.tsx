import { StatusLabel, type Status } from '@features/tables';
import { useFormattedDate } from '@hooks/useFormattedDate';
import { useSelector } from '@lib/redux/store';
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
import { useRouter } from 'next/router';
import React, { type FC } from 'react';
interface AdminStockStatusTableItem extends TableNode {
	id: string | number;
	stock_status_name: string;
	slug: string;
}

interface AdminStockStatusTableProps {
	nodes: AdminStockStatusTableItem[];
}

export const AdminStockStatusTable: FC<AdminStockStatusTableProps> = (
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
	const defaultCurrency = useSelector((state) => state.product.currency);

	const sort = useSort(
		data,
		{
			onChange: onSortChange,
		},

		{
			sortIcon: { ...defaultSortIcon },
			sortFns: {
				STOCK_STATUS_NAME: (array) =>
					array.sort((a, b) =>
						a.stock_status_name.localeCompare(b.stock_status_name),
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
			{(tableList: AdminStockStatusTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='STOCK_STATUS_NAME'>
								{t('stock_status_name')}
							</HeaderCellSort>
							<HeaderCell>{t('action')}</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.map((item) => (
							<Row item={item} key={item.id}>
								<CellSelect item={item} />
								<Cell>{item.stock_status_name}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`/admin/stock-status/${item.slug}`)
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

AdminStockStatusTable.displayName = 'AdminStockStatusTable';
