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

interface AdminAttributeGroupTableItem extends TableNode {
  id: string | number;
  attribute_group_name: string;
  sort_order: number;
  slug: string;
}

interface AdminAttributeGroupTableProps {
  nodes: AdminAttributeGroupTableItem[];
}

export const AdminAttributeGroupTable: FC<AdminAttributeGroupTableProps> = (
  props,
) => {
  const { nodes } = props;
  const data = { nodes };
  const t = useTranslations('admin');
  const router = useRouter();
  const theme = useTheme({
    ...getTheme(),
    Table: `--data-table-library_grid-template-columns:  50px 1fr 1fr 150px;`,
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
        ATTRIBUTE_GROUP_NAME: (array) =>
          array.sort((a, b) =>
            a.attribute_group_name.localeCompare(b.attribute_group_name),
          ),
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
      {(tableList: AdminAttributeGroupTableItem[]) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCellSelect />
              <HeaderCellSort sortKey='ATTRIBUTE_GROUP_NAME'>
                {t('attribute_group_name')}
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
                <Cell>{item.attribute_group_name}</Cell>
                <Cell>{item.sort_order}</Cell>
                <Cell>
                  <ButtonBase
                    onClick={() =>
                      router.push(`/admin/attributes-group/${item.slug}`)
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

AdminAttributeGroupTable.displayName = 'AdminAttributeGroupTable';
