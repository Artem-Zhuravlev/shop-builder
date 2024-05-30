import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import cls from './AdminCategoriesTable.module.scss';
import {
	Table,
	Header,
	HeaderRow,
	Body,
	Row,
	HeaderCell,
	Cell,
} from '@table-library/react-table-library/table';
import {
	useSort,
	HeaderCellSort,
} from '@table-library/react-table-library/sort';
import {
	HeaderCellSelect,
	CellSelect,
	useRowSelect,
} from '@table-library/react-table-library/select';
import {
	defaultTableStyles,
	defaultSortIcon,
} from '@shared/TableBase/TableBase';
import { ButtonBase } from '@shared/ButtonBase';
import { useRouter } from 'next/router';
import { TableNode } from '@table-library/react-table-library';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

interface AdminCategoriesTableItem extends TableNode {
	id: string | number;
	category_name: string;
	sort_order: number;
	slug: string;
}

interface AdminCategoriesTableProps {
	nodes: AdminCategoriesTableItem[];
}

export const AdminCategoriesTable: FC<AdminCategoriesTableProps> = (props) => {
	const { nodes } = props;
	const t = useTranslations('admin');
	const router = useRouter();

	const data = { nodes };
	const theme = useTheme({
		...getTheme(),
		Table: `--data-table-library_grid-template-columns:  50px 1fr 150px 150px;`,
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
				CATEGORY: (array) =>
					array.sort((a, b) => a.category_name.localeCompare(b.category_name)),
				ORDER: (array) => array.sort((a, b) => a.sort_order - b.sort_order),
			},
		}
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
			select={select}>
			{(tableList: AdminCategoriesTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='CATEGORY'>
								{t('category_name')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='ORDER'>{t('sort_order')}</HeaderCellSort>
							<HeaderCell>{t('action')}</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.map((item) => (
							<Row
								item={item}
								key={item.id}>
								<CellSelect item={item} />
								<Cell>{item.category_name}</Cell>
								<Cell>{item.sort_order}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`/admin/categories/${item.slug}`)
										}>
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
