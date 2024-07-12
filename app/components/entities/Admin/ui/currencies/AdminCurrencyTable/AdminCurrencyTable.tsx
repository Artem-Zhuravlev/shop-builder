import { StatusLabel, type Status } from '@features/tables';
import { ButtonBase } from '@shared/ButtonBase';
import { useFormattedDate } from '@hooks/useFormattedDate';
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

interface AdminCurrencyTableItem extends TableNode {
	id: string | number;
	currency_title: string;
	code: string;
	value: number;
	status: Status;
	date_added: string;
	slug: string;
}

interface AdminCurrencyTableProps {
	nodes: AdminCurrencyTableItem[];
}

export const AdminCurrencyTable: FC<AdminCurrencyTableProps> = (props) => {
	const { nodes } = props;
	const data = { nodes };
	const t = useTranslations('admin');
	const router = useRouter();
	const theme = useTheme({
		...getTheme(),
		Table:
			'--data-table-library_grid-template-columns:  50px 1fr 1fr 1fr 1fr 1fr 150px;',
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
				CURRENCY_TITLE: (array) =>
					array.sort((a, b) =>
						a.currency_title.localeCompare(b.currency_title),
					),
				CODE: (array) => array.sort((a, b) => a.code.localeCompare(b.code)),
				VALUE: (array) => array.sort((a, b) => a.value - b.value),
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
			{(tableList: AdminCurrencyTableItem[]) => (
				<>
					<Header>
						<HeaderRow>
							<HeaderCellSelect />
							<HeaderCellSort sortKey='CURRENCY_TITLE'>
								{t('currency_title')}
							</HeaderCellSort>
							<HeaderCellSort sortKey='CODE'>{t('code')}</HeaderCellSort>
							<HeaderCellSort sortKey='VALUE'>{t('value')}</HeaderCellSort>
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
								<Cell>{item.currency_title}</Cell>
								<Cell>{item.code}</Cell>
								<Cell>{item.value}</Cell>
								<Cell>
									<StatusLabel value={item.status} />
								</Cell>
								<Cell>{useFormattedDate(item.date_added)}</Cell>
								<Cell>
									<ButtonBase
										onClick={() => router.push(`/admin/currency/${item.slug}`)}
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

AdminCurrencyTable.displayName = 'AdminCurrencyTable';
