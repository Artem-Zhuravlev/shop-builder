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

interface AdminAttributesItem extends TableNode {
	id: string | number;
	attribute_name: string;
	attribute_group: string;
	sort_order: number;
	slug: string;
}

interface AdminAttributesTableProps {
	nodes: AdminAttributesItem[];
}

export const AdminAttributesTable: FC<AdminAttributesTableProps> = (props) => {
	const { nodes } = props;
	const data = { nodes };
	const t = useTranslations('admin');
	const router = useRouter();
	const theme = useTheme({
		...getTheme(),
		Table:
			'--data-table-library_grid-template-columns:  50px 1fr 1fr 1fr 150px;',
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
				ATTRIBUTE_NAME: (array) =>
					array.sort((a, b) =>
						a.attribute_name.localeCompare(b.attribute_name),
					),
				ATTRIBUTE_GROUP: (array) =>
					array.sort((a, b) =>
						a.attribute_group.localeCompare(b.attribute_group),
					),
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
			{(tableList: AdminAttributesItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='ATTRIBUTE_NAME'>
								{t('attribute_name')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='ATTRIBUTE_GROUP'>
								{t('attribute_group')}
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
								<Cell>{item.attribute_name}</Cell>
								<Cell>{item.attribute_group}</Cell>
								<Cell>{item.sort_order}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`/admin/attributes/${item.slug}`)
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

AdminAttributesTable.displayName = 'AdminAttributesTable';
