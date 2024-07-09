import { useFormattedDate } from '@hooks/useFormattedDate';
import { ButtonBase } from '@shared/ButtonBase';
import { useSelector } from '@lib/redux/store';
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
import type { FC } from 'react';
import React from 'react';
import { StatusLabel, type Status } from '@features/tables';

interface AdminAffiliatesTableItem extends TableNode {
	id: string | number;
	name: string;
	tracking: string;
	commission: number;
	balance: number;
	status: Status;
	date_added: string;
	slug: string;
}

interface AdminAffiliatesTableProps {
	nodes: AdminAffiliatesTableItem[];
}

export const AdminAffiliatesTable: FC<AdminAffiliatesTableProps> = (props) => {
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
	const defaultCurrency = useSelector((state) => state.product.currency);
	const sort = useSort(
		data,
		{
			onChange: onSortChange,
		},

		{
			sortIcon: { ...defaultSortIcon },
			sortFns: {
				NAME: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
				TRACKING: (array) =>
					array.sort((a, b) => a.tracking.localeCompare(b.tracking)),
				COMMISSION: (array) =>
					array.sort((a, b) => a.commission - b.commission),
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
			{(tableList: AdminAffiliatesTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='NAME'>
								{t('customer_name')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='TRACKING'>
								{t('tracking')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='COMMISSION'>
								{t('commission')}
							</HeaderCellSort>
							<HeaderCell>{t('balance')}</HeaderCell>
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
								<Cell>{item.name}</Cell>
								<Cell>{item.tracking}</Cell>
								<Cell>{item.commission}</Cell>
								<Cell>
									{defaultCurrency}
									{item.balance}
								</Cell>
								<Cell>
									<StatusLabel value={item.status} />
								</Cell>
								<Cell>{useFormattedDate(item.date_added)}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`/admin/affiliates/${item.slug}`)
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

AdminAffiliatesTable.displayName = 'AdminAffiliatesTable';
