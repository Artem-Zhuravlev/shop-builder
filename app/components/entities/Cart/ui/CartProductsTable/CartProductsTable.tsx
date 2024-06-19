import { TableBase } from '@shared/TableBase';
import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
import {
  CartProductsTableAmount,
  CartProductsTableImage,
  CartProductsTableProduct,
  CartProductsTableQuantity,
} from './common';

interface CartProductsTableItem {
  id: string | number;
  image?: string;
  model: string;
  price: number;
  slug: string;
  title: string;
  quantity: number;
}

interface CartProductsTableProps {
  items: CartProductsTableItem[];
}

interface CartProductsTableData {
  id: string | number;
  image: {
    slug: string;
    title: string;
    image: string;
  };
  product_name: {
    title: string;
    slug: string;
  };
  model: string;
  quantity: {
    quantity: number;
    id: string | number;
  };
  unit_price: {
    price: number;
  };
  total: {
    price: number;
  };
}

const mapItemsToTableData = (
  items: CartProductsTableItem[],
): CartProductsTableData[] => {
  return items.map((item) => ({
    id: item.id,
    image: {
      slug: item.slug,
      title: item.title,
      image: item.image ?? '',
    },
    product_name: {
      title: item.title,
      slug: item.slug,
    },
    model: item.model,
    quantity: { quantity: item.quantity, id: item.id },
    unit_price: {
      price: item.price,
    },
    total: {
      price: item.price * item.quantity,
    },
  }));
};

export const CartProductsTable: FC<CartProductsTableProps> = ({ items }) => {
  const t = useTranslations('cart');
  const theme = {
    Table: `
        --data-table-library_grid-template-columns:
					minmax(80px, 1fr)
					minmax(100px, 1fr)
					minmax(100px, 1fr)
					minmax(250px, 1fr)
					minmax(100px, 1fr)
					minmax(100px, 1fr);
      `,
  };

  const data = useMemo(() => mapItemsToTableData(items), [items]);

  const columns = useMemo(
    () => [
      {
        label: t('image'),
        renderCell: (item: CartProductsTableData) => (
          <CartProductsTableImage
            image={item.image.image}
            slug={item.image.slug}
            title={item.image.title}
          />
        ),
      },
      {
        label: t('product_name'),
        renderCell: (item: CartProductsTableData) => (
          <CartProductsTableProduct
            slug={item.product_name.slug}
            title={item.product_name.title}
          />
        ),
      },
      {
        label: t('model'),
        renderCell: (item: CartProductsTableData) => item.model,
      },
      {
        label: t('quantity'),
        renderCell: (item: CartProductsTableData) => (
          <CartProductsTableQuantity
            quantity={item.quantity.quantity}
            id={item.quantity.id}
          />
        ),
      },
      {
        label: t('unit_price'),
        renderCell: (item: CartProductsTableData) => (
          <CartProductsTableAmount price={item.unit_price.price} />
        ),
      },
      {
        label: t('total'),
        renderCell: (item: CartProductsTableData) => (
          <CartProductsTableAmount price={item.total.price} />
        ),
      },
    ],
    [t],
  );

  return (
    <TableBase
      columns={columns}
      data={data}
      themeProps={theme}
      layout={{ custom: true }}
    />
  );
};

CartProductsTable.displayName = 'CartProductsTable';
