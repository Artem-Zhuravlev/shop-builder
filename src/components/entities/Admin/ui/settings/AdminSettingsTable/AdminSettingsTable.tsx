'use client';
import { ADMIN_ROUTES } from '@/constants/admin-routes.constants';
import { ButtonBase } from '@/components/shared/ButtonBase';
import { defaultTableStyles } from '@/components/shared/TableBase/TableBase';
import type { TableNode } from '@table-library/react-table-library';
import { getTheme } from '@table-library/react-table-library/baseline';
import {
	CellSelect,
	HeaderCellSelect,
	useRowSelect,
} from '@table-library/react-table-library/select';
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
import type { SettingsInterface } from '@interfaces/settings';
import type {
	Action,
	State,
} from '@table-library/react-table-library/types/common';
import { EmptyDataTableRow } from '@/components/features/tables';

export interface AdminSettingsTableItem extends TableNode {
	id: string | number;
	store_name: string;
	store_owner: string;
}

interface AdminSettingsTableProps {
	nodes: SettingsInterface[];
	onSelect: (action: Action) => void;
}

export const AdminSettingsTable: FC<AdminSettingsTableProps> = (props) => {
	const { nodes, onSelect } = props;
	const data = { nodes };
	const t = useTranslations('admin');
	const router = useRouter();
	const theme = useTheme({
		...getTheme(),
		Table: '--data-table-library_grid-template-columns:  50px 1fr 2fr 150px;',
		...defaultTableStyles,
	});

	const select = useRowSelect(data, {
		onChange: onSelectChange,
	});

	function onSelectChange(action: Action, state: State) {
		onSelect(action);
	}

	return (
		<Table data={data} theme={theme} layout={{ custom: true }} select={select}>
			{(tableList: SettingsInterface[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCell>{t('store_name')}</HeaderCell>
							<HeaderCell>{t('store_owner')}</HeaderCell>
							<HeaderCell>{t('action')}</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.length > 0 ? (
							tableList.map((item) => (
								<Row item={item} key={item.id}>
									<CellSelect item={item} />
									<Cell>{item.store_name}</Cell>
									<Cell>{item.store_owner}</Cell>
									<Cell>
										<ButtonBase
											onClick={() =>
												router.push(`${ADMIN_ROUTES.settings}/${item.id}`)
											}
										>
											<span className='icon-pencil' />
										</ButtonBase>
									</Cell>
								</Row>
							))
						) : (
							<EmptyDataTableRow cells={4} />
						)}
					</Body>
				</>
			)}
		</Table>
	);
};

AdminSettingsTable.displayName = 'AdminSettingsTable';
