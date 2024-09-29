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
import React, { useState, type FC } from 'react';
import { AdminTableNavbar } from '../../AdminTableNavbar/AdminTableNavbar';
import type {
	Action,
	State,
} from '@table-library/react-table-library/types/common';

interface CountriesInterface extends TableNode {}

interface AdminCountriesTableProps {
	nodes: CountriesInterface[];
}

export const AdminCountriesTable: FC<AdminCountriesTableProps> = (props) => {
	const { nodes } = props;
	const data = { nodes };
	const t = useTranslations('admin');
	const [selectedRows, setSelectedRows] = useState([]);
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
				COUNTRY_NAME: (array) =>
					array.sort((a, b) => a.country.localeCompare(b.country)),
				ISO_CODE_2: (array) =>
					array.sort((a, b) => a.iso_code_2.localeCompare(b.iso_code_2)),
				ISO_CODE_3: (array) =>
					array.sort((a, b) => a.iso_code_3.localeCompare(b.iso_code_3)),
			},
		},
	);

	const select = useRowSelect(data, {
		onChange: onSelectChange,
	});

	function onSortChange(action: Action, state: State) {
		console.log(action, state);
	}

	function onSelectChange(action: Action, state: State) {
		setSelectedRows(state.ids);
	}

	return (
		<>
			<AdminTableNavbar
				title={t('countries')}
				route='/admin/countries'
				onDelete={() => {}}
				isDeleteBtn={selectedRows.length > 0}
			/>
			<Table
				data={data}
				theme={theme}
				layout={{ custom: true }}
				sort={sort}
				select={select}
			>
				{(tableList: CountriesInterface[]) => (
					<>
						<Header>
							<HeaderRow>
								<HeaderCellSelect />
								<HeaderCellSort sortKey='COUNTRY_NAME'>
									{t('country_name')}
								</HeaderCellSort>
								<HeaderCellSort sortKey='ISO_CODE_2'>
									{t('iso_code_2')}
								</HeaderCellSort>
								<HeaderCellSort sortKey='ISO_CODE_3'>
									{t('iso_code_3')}
								</HeaderCellSort>
								<HeaderCell>{t('action')}</HeaderCell>
							</HeaderRow>
						</Header>

						<Body>
							{tableList.map((item) => (
								<Row item={item} key={item.id}>
									<CellSelect item={item} />
									<Cell>{item.country}</Cell>
									<Cell>{item.iso_code_2}</Cell>
									<Cell>{item.iso_code_3}</Cell>
									<Cell>
										<ButtonBase
											onClick={() =>
												router.push(`${ADMIN_ROUTES.countries}/${item.id}`)
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

AdminCountriesTable.displayName = 'AdminCountriesTable';
