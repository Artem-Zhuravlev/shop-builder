import { useSelector } from '@lib/redux';
import { FC } from 'react';
import cls from '../CartProductsTable.module.scss';

interface CartProductsTableAmountProps {
  price: string | number;
  currency?: string;
}

export const CartProductsTableAmount: FC<CartProductsTableAmountProps> = (
  props,
) => {
  const { price, currency } = props;
  const defaultCurrency = useSelector((state) => state.product.currency);

  return (
    <div className={cls.CartProductsTableAmount}>
      <span>{currency || defaultCurrency}</span>
      <span>{price}</span>
    </div>
  );
};

CartProductsTableAmount.displayName = 'CartProductsTableAmount';
