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
import React, { type FC, useState } from 'react';
import { AdminTableNavbar } from '../../AdminTableNavbar/AdminTableNavbar';
import type {
	Action,
	State,
} from '@table-library/react-table-library/types/common';

interface LanguagesInterface extends TableNode {}

interface AdminLanguagesTableProps {
	nodes: LanguagesInterface[];
	onDelete: (ids: number[]) => void;
}

export const AdminLanguagesTable: FC<AdminLanguagesTableProps> = (props) => {
	const { nodes, onDelete } = props;
	const data = { nodes };
	const t = useTranslations('admin');
	const [selectedRows, setSelectedRows] = useState([]);
	const router = useRouter();
	const theme = useTheme({
		...getTheme(),
		Table:
			'--data-table-library_grid-template-columns:  50px 2fr 1fr 1fr 150px;',
		...defaultTableStyles,
	});

	const onSelectChange = (action: Action, state: State) => {
		setSelectedRows(state.ids);
	};

	const onSortChange = (action: any, state: any) => {
		console.log(action, state);
	};

	const sort = useSort(
		data,
		{
			onChange: onSortChange,
		},

		{
			sortIcon: { ...defaultSortIcon },
			sortFns: {
				LANGUAGE_NAME: (array) =>
					array.sort((a, b) => a.language_name.localeCompare(b.language_name)),
				CODE: (array) => array.sort((a, b) => a.code.localeCompare(b.code)),
				SORT_ORDER: (array) =>
					array.sort((a, b) => a.sort_order - b.sort_order),
			},
		},
	);

	const select = useRowSelect(data, {
		onChange: onSelectChange,
	});

	return (
		<>
			<AdminTableNavbar
				title={t('languages')}
				route='/admin/languages'
				onDelete={() => onDelete(selectedRows)}
				isDeleteBtn={selectedRows.length > 0}
			/>
			<Table
				data={data}
				theme={theme}
				layout={{ custom: true }}
				sort={sort}
				select={select}
			>
				{(tableList: LanguagesInterface[]) => (
					<>
						<Header>
							<HeaderRow>
								<HeaderCellSelect />
								<HeaderCellSort sortKey='LANGUAGE_NAME'>
									{t('language_name')}
								</HeaderCellSort>
								<HeaderCellSort sortKey='CODE'>{t('code')}</HeaderCellSort>
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
									<Cell>{item.name}</Cell>
									<Cell>{item.code}</Cell>
									<Cell>{item.sort_order}</Cell>
									<Cell>
										<ButtonBase
											onClick={() =>
												router.push(`${ADMIN_ROUTES.languages}/${item.id}`)
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
		</>
	);
};

AdminLanguagesTable.displayName = 'AdminLanguagesTable';
