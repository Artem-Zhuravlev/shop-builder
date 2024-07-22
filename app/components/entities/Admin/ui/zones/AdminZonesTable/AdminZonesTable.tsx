'use client';
import { ADMIN_ROUTES } from '@constants/admin-routes.constants';
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
import { useRouter } from 'next/navigation';
import React, { type FC } from 'react';

interface AdminZonesTableItem extends TableNode {
	id: string | number;
	country: string;
	zone_name: string;
	zone_code: string;
	slug: string;
}

interface AdminZonesTableProps {
	nodes: AdminZonesTableItem[];
}

export const AdminZonesTable: FC<AdminZonesTableProps> = (props) => {
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
				COUNTRY: (array) =>
					array.sort((a, b) => a.country.localeCompare(b.country)),
				ZONE_NAME: (array) =>
					array.sort((a, b) => a.zone_name.localeCompare(b.zone_name)),
				ZONE_CODE: (array) =>
					array.sort((a, b) => a.zone_code.localeCompare(b.zone_code)),
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
			{(tableList: AdminZonesTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='COUNTRY'>{t('country')}</HeaderCellSort>
							<HeaderCellSort sortKey='ZONE_NAME'>
								{t('zone_name')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='ZONE_CODE'>
								{t('zone_code')}
							</HeaderCellSort>
							<HeaderCell>{t('action')}</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.map((item) => (
							<Row item={item} key={item.id}>
								<CellSelect item={item} />
								<Cell>{item.country}</Cell>
								<Cell>{item.zone_name}</Cell>
								<Cell>{item.zone_code}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`${ADMIN_ROUTES.zones}/${item.slug}`)
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

AdminZonesTable.displayName = 'AdminZonesTable';
