import { ButtonBase } from '@shared/ButtonBase';
import { defaultTableStyles } from '@shared/TableBase/TableBase';
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
import { useRouter } from 'next/router';
import React, { type FC } from 'react';

interface AdminSettingsTableItem extends TableNode {
	id: string | number;
	store_name: string;
	store_url: string;
	slug: string;
}

interface AdminSettingsTableProps {
	nodes: AdminSettingsTableItem[];
}

export const AdminSettingsTable: FC<AdminSettingsTableProps> = (props) => {
	const { nodes } = props;
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

	function onSelectChange(action: any, state: any) {
		console.log(action, state);
	}

	return (
		<Table data={data} theme={theme} layout={{ custom: true }} select={select}>
			{(tableList: AdminSettingsTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCell>{t('store_name')}</HeaderCell>
							<HeaderCell>{t('store_url')}</HeaderCell>
							<HeaderCell>{t('action')}</HeaderCell>
						</HeaderRow>
					</Header>

					<Body>
						{tableList.map((item) => (
							<Row item={item} key={item.id}>
								<CellSelect item={item} />
								<Cell>{item.store_name}</Cell>
								<Cell>{item.store_url}</Cell>
								<Cell>
									<ButtonBase
										onClick={() => router.push(`/admin/settings/${item.slug}`)}
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

AdminSettingsTable.displayName = 'AdminSettingsTable';
