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

interface AdminFiltersItem extends TableNode {
	id: string | number;
	filter_group: string;
	sort_order: number;
	slug: string;
}

interface AdminFiltersTableProps {
	nodes: AdminFiltersItem[];
}

export const AdminFiltersTable: FC<AdminFiltersTableProps> = (props) => {
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
				FILTER_GROUP: (array) =>
					array.sort((a, b) => a.filter_group.localeCompare(b.filter_group)),
				SORT_ORDER: (array) =>
					array.sort((a, b) => a.sort_order - b.sort_order),
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
			{(tableList: AdminFiltersItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='FILTER_GROUP'>
								{t('filter_group')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='SORT_ORDER'>
								{t('sort_order')}
							</HeaderCellSort>
							<HeaderCell>{t('action')}</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.map((item) => (
							<Row item={item} key={item.id}>
								<CellSelect item={item} />
								<Cell>{item.filter_group}</Cell>
								<Cell>{item.sort_order}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`${ADMIN_ROUTES.filters}/${item.slug}`)
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

AdminFiltersTable.displayName = 'AdminFiltersTable';
