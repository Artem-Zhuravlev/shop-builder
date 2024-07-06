import { Status, StatusLabel } from '@features/tables';
import { useFormattedDate } from '@hooks/useFormattedDate';
import { useSelector } from '@lib/redux/store';
import { ButtonBase } from '@shared/ButtonBase';
import {
  defaultSortIcon,
  defaultTableStyles,
} from '@shared/TableBase/TableBase';
import { TableNode } from '@table-library/react-table-library';
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
import { FC } from 'react';
interface AdminOrdersTableItem extends TableNode {
  id: string | number;
  order_id: number;
  customer: string;
  status: Status;
  total: string;
  date_added: string;
}

interface AdminOrdersTableProps {
  nodes: AdminOrdersTableItem[];
}

export const AdminOrdersTable: FC<AdminOrdersTableProps> = (props) => {
  const { nodes } = props;
  const data = { nodes };
  const t = useTranslations('admin');
  const router = useRouter();
  const theme = useTheme({
    ...getTheme(),
    Table: `--data-table-library_grid-template-columns:  50px 1fr 1fr 1fr 1fr 1fr 150px;`,
    ...defaultTableStyles,
  });
  const defaultCurrency = useSelector((state) => state.product.currency);

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },

    {
      sortIcon: { ...defaultSortIcon },
      sortFns: {
        ORDER_ID: (array) => array.sort((a, b) => a.order_id - b.order_id),
        CUSTOMER: (array) =>
          array.sort((a, b) => a.customer.localeCompare(b.customer)),
        STATUS: (array) =>
          array.sort((a, b) => a.status.localeCompare(b.status)),
        TOTAL: (array) => array.sort((a, b) => a.total - b.total),
        SORT_ORDER: (array) =>
          array.sort((a, b) => a.sort_order - b.sort_order),
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
      select={select}>
      {(tableList: AdminOrdersTableItem[]) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCellSelect />
              <HeaderCellSort sortKey='ORDER_ID'>
                {t('order_id')}
              </HeaderCellSort>
              <HeaderCellSort sortKey='CUSTOMER'>
                {t('customer')}
              </HeaderCellSort>
              <HeaderCellSort sortKey='STATUS'>{t('status')}</HeaderCellSort>
              <HeaderCellSort sortKey='TOTAL'>{t('total')}</HeaderCellSort>
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
                <Cell>{item.order_id}</Cell>
                <Cell>{item.customer}</Cell>
                <Cell>
                  <StatusLabel value={item.status} />
                </Cell>
                <Cell>
                  {defaultCurrency}
                  {item.total}
                </Cell>
                <Cell>{useFormattedDate(item.date_added)}</Cell>
                <Cell>
                  <ButtonBase
                    onClick={() =>
                      router.push(`/admin/orders/${item.order_id}`)
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

AdminOrdersTable.displayName = 'AdminOrdersTable';
