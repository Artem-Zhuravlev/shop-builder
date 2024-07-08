import { ButtonBase } from '@shared/ButtonBase';
import {
  defaultSortIcon,
  defaultTableStyles,
} from '@shared/TableBase/TableBase';
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
  type TableNode,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import type { FC } from 'react';

interface AdminRecurringProfilesTableItem extends TableNode {
  id: string | number;
  name: string;
  sort_order: number;
  slug: string;
}

interface AdminRecurringProfilesTableProps {
  nodes: AdminRecurringProfilesTableItem[];
}

export const AdminRecurringProfilesTable: FC<
  AdminRecurringProfilesTableProps
> = (props) => {
  const { nodes } = props;
  const t = useTranslations('admin');

  const data = { nodes };
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
        NAME: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        SORT_ORDER: (array) =>
          array.sort(
            (a, b) =>
              Number.parseFloat(a.sort_order) - Number.parseFloat(b.sort_order),
          ),
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
      {(tableList: AdminRecurringProfilesTableItem[]) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCellSelect />
              <HeaderCellSort sortKey='NAME'>{t('name')}</HeaderCellSort>
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
                <Cell>{item.sort_order}</Cell>
                <Cell>
                  <ButtonBase
                    onClick={() =>
                      router.push(`/admin/recurring-products/${item.slug}`)
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

AdminRecurringProfilesTable.displayName = 'AdminRecurringProfilesTable';
