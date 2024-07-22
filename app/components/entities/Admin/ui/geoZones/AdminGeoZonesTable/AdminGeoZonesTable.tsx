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

interface AdminGeoZonesTableItem extends TableNode {
	id: string | number;
	geo_zone_name: string;
	description: string;
	slug: string;
}

interface AdminGeoZonesTableProps {
	nodes: AdminGeoZonesTableItem[];
}

export const AdminGeoZonesTable: FC<AdminGeoZonesTableProps> = (props) => {
	const { nodes } = props;
	const data = { nodes };
	const t = useTranslations();
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
				GEO_ZONE_NAME: (array) =>
					array.sort((a, b) => a.geo_zone_name.localeCompare(b.geo_zone_name)),
				DESCRIPTION: (array) =>
					array.sort((a, b) => a.description.localeCompare(b.description)),
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
			{(tableList: AdminGeoZonesTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='GEO_ZONE_NAME'>
								{t('admin.geo_zone_name')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='DESCRIPTION'>
								{t('inputs.description')}
							</HeaderCellSort>
							<HeaderCell>{t('admin.action')}</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.map((item) => (
							<Row item={item} key={item.id}>
								<CellSelect item={item} />
								<Cell>{item.geo_zone_name}</Cell>
								<Cell>{item.description}</Cell>
								<Cell>
									<ButtonBase
										onClick={() =>
											router.push(`${ADMIN_ROUTES.geoZones}/${item.slug}`)
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

AdminGeoZonesTable.displayName = 'AdminGeoZonesTable';
