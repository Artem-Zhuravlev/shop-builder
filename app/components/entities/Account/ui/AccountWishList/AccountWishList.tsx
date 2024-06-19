import { TableBase } from '@shared/TableBase';
import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
import cls from './AccountWishList.module.scss';
import {
  AccountWishListActions,
  AccountWishListImage,
  AccountWishListProduct,
  AccountWishUnitPrice,
} from './common';

// Types
interface AccountWishListItem {
  id: string | number;
  image: string;
  model: string;
  oldPrice?: number;
  price: number;
  slug: string;
  stock: 'In stock' | 'Out of stock';
  title: string;
}
interface AccountWishListProps {
  items: AccountWishListItem[];
}
interface AccountWishListTableProps {
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
  stock: 'In stock' | 'Out of stock';
  unit_price: {
    price: number;
    oldPrice?: number;
  };
  action: {
    slug: string;
  };
}

const transformItemsToTableData = (
  items: AccountWishListItem[],
): AccountWishListTableProps[] => {
  return items.map((item) => ({
    id: item.id,
    image: {
      slug: item.slug,
      title: item.title,
      image: item.image,
    },
    product_name: {
      title: item.title,
      slug: item.slug,
    },
    model: item.model,
    stock: item.stock,
    unit_price: {
      price: item.price,
      oldPrice: item.oldPrice,
    },
    action: {
      slug: item.slug,
    },
  }));
};

const addToCart = (slug: string): void => {
  // Function implementation
};

const removeFromWishList = (slug: string): void => {
  // Function implementation
};

export const AccountWishList: FC<AccountWishListProps> = ({ items }) => {
  const t = useTranslations('account.wish_list');
  const theme = {
    Table: `
        --data-table-library_grid-template-columns:
					minmax(80px, 1fr)
					minmax(100px, 1fr)
					minmax(100px, 1fr)
					minmax(100px, 1fr)
					minmax(100px, 1fr)
					minmax(100px, 1fr);
      `,
  };

  const data = useMemo(() => transformItemsToTableData(items), [items]);

  const columns = useMemo(
    () => [
      {
        label: t('image'),
        renderCell: (item: AccountWishListTableProps) => (
          <AccountWishListImage
            image={item.image.image}
            slug={item.image.slug}
            title={item.image.title}
          />
        ),
      },
      {
        label: t('product_name'),
        renderCell: (item: AccountWishListTableProps) => (
          <AccountWishListProduct
            slug={item.product_name.slug}
            title={item.product_name.title}
          />
        ),
      },
      {
        label: t('model'),
        renderCell: (item: AccountWishListTableProps) => item.model,
      },
      {
        label: t('stock'),
        renderCell: (item: AccountWishListTableProps) => item.stock,
      },
      {
        label: t('unit_price'),
        renderCell: (item: AccountWishListTableProps) => (
          <AccountWishUnitPrice
            price={item.unit_price.price}
            oldPrice={item.unit_price.oldPrice}
          />
        ),
      },
      {
        label: t('action'),
        renderCell: (item: AccountWishListTableProps) => (
          <AccountWishListActions
            slug={item.action.slug}
            addToCart={addToCart}
            removeFromWishList={removeFromWishList}
          />
        ),
      },
    ],
    [t],
  );

  return (
    <div className={cls.AccountWishList}>
      <h2>{t('title')}</h2>
      <TableBase
        columns={columns}
        data={data}
        themeProps={theme}
        layout={{ custom: true }}
      />
    </div>
  );
};

AccountWishList.displayName = 'AccountWishList';
