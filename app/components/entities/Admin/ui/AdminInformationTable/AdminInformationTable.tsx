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
import type { FC } from 'react';

interface AdminInformationTableItem extends TableNode {
  id: string | number;
  title: string;
  sort_order: number;
  slug: string;
}

interface AdminInformationTableProps {
  nodes: AdminInformationTableItem[];
}

export const AdminInformationTable: FC<AdminInformationTableProps> = (
  props,
) => {
  const { nodes } = props;
  const data = { nodes };
  const t = useTranslations('admin');
  const router = useRouter();
  const theme = useTheme({
    ...getTheme(),
    Table: '--data-table-library_grid-template-columns:  50px 2fr 1fr 150px;',
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
        TITLE: (array) => array.sort((a, b) => a.title.localeCompare(b.title)),
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
      select={select}>
      {(tableList: AdminInformationTableItem[]) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCellSelect />
              <HeaderCellSort sortKey='TITLE'>
                {t('information_title')}
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
                <Cell>{item.title}</Cell>
                <Cell>{item.sort_order}</Cell>
                <Cell>
                  <ButtonBase
                    onClick={() =>
                      router.push(`/admin/information/${item.slug}`)
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

AdminInformationTable.displayName = 'AdminInformationTable';
