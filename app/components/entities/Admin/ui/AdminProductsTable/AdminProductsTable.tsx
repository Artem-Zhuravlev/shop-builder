import type { ImageMetaProps } from '@lib/types/ImageMetaProps';
import { ButtonBase } from '@shared/ButtonBase';
import {
  defaultSortIcon,
  defaultTableStyles,
} from '@shared/TableBase/TableBase';
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
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import { useSelector } from '@lib/redux/store';
import type { TableNode } from '@table-library/react-table-library';
import { getTheme } from '@table-library/react-table-library/baseline';
import { useTheme } from '@table-library/react-table-library/theme';
import { useRouter } from 'next/router';

interface AdminProductsTableItem extends TableNode {
  id: string | number;
  image: ImageMetaProps;
  product_name: string;
  model: string;
  price: string;
  old_price?: string;
  quantity: number;
  status: string;
  slug: string;
}

interface AdminProductsTableProps {
  nodes: AdminProductsTableItem[];
}

export const AdminProductsTable: FC<AdminProductsTableProps> = (props) => {
  const { nodes } = props;
  const data = { nodes };
  const defaultCurrency = useSelector((state) => state.product.currency);
  const t = useTranslations('admin');
  const router = useRouter();
  const theme = useTheme({
    ...getTheme(),
    Table:
      '--data-table-library_grid-template-columns:  50px 90px 2fr 1fr 1fr 1fr 1fr 150px;',
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
        PRODUCT_NAME: (array) =>
          array.sort((a, b) => a.product_name.localeCompare(b.product_name)),
        MODEL: (array) => array.sort((a, b) => a.model.localeCompare(b.model)),
        PRICE: (array) =>
          array.sort(
            (a, b) => Number.parseFloat(a.price) - Number.parseFloat(b.price),
          ),
        QUANTITY: (array) => array.sort((a, b) => a.quantity - b.quantity),
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
      {(tableList: AdminProductsTableItem[]) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCellSelect />
              <HeaderCell>{t('image')}</HeaderCell>
              <HeaderCellSort sortKey='PRODUCT_NAME'>
                {t('product_name')}
              </HeaderCellSort>
              <HeaderCellSort sortKey='MODEL'>{t('model')}</HeaderCellSort>
              <HeaderCellSort sortKey='PRICE'>{t('price')}</HeaderCellSort>
              <HeaderCellSort sortKey='QUANTITY'>
                {t('quantity')}
              </HeaderCellSort>
              <HeaderCellSort sortKey='STATUS'>{t('status')}</HeaderCellSort>

              <HeaderCell>{t('action')}</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row item={item} key={item.id}>
                <CellSelect item={item} />
                <Cell>
                  <img
                    src={item.image.url}
                    alt={item.image.alt}
                    width={50}
                    height={50}
                  />
                </Cell>
                <Cell>{item.product_name}</Cell>
                <Cell>{item.model}</Cell>
                <Cell>
                  {item.old_price && (
                    <>
                      <del>
                        {defaultCurrency}
                        {item.old_price}
                      </del>
                      <br />
                    </>
                  )}

                  <span className={item.old_price && 'text-danger'}>
                    {defaultCurrency}
                    {item.price}
                  </span>
                </Cell>
                <Cell>
                  <span
                    className={`badge ${item.quantity > 0 ? 'badge-success' : 'badge-warning'}`}>
                    {item.quantity}
                  </span>
                </Cell>
                <Cell>{item.status}</Cell>
                <Cell>
                  <ButtonBase
                    onClick={() => router.push(`/admin/products/${item.slug}`)}>
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

AdminProductsTable.displayName = 'AdminProductsTable';
