import { useSelector } from '@lib/redux';
import { TimerBase } from '@shared/TimerBase/TimerBase';
import { TooltipBase } from '@shared/TooltipBase/TooltipBase';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { ProductInfoRow } from '../ProductInfoRow/ProductInfoRow';
import cls from './ProductInfoPrice.module.scss';

export interface ProductInfoPriceProps {
  price: number;
  oldPrice?: number;
  discount?: number;
  deadline?: string;
}

export const ProductInfoPrice: FC<ProductInfoPriceProps> = (props) => {
  const { price, oldPrice, discount, deadline } = props;
  const t = useTranslations('product');
  const currency = useSelector((state) => state.product.currency);

  return (
    <ProductInfoRow className={cls.ProductInfoPrice}>
      <h4 className={cls.ProductInfoCurrentPrice}>
        {price} {currency}
      </h4>
      {oldPrice && (
        <del className={cls.ProductInfoOldPrice}>
          {oldPrice} {currency}
        </del>
      )}
      {discount && (
        <TooltipBase content={t('discount_price')}>
          <div className={cls.ProductInfoDiscount}>
            -{discount}% <span className='icon-question' />
          </div>
        </TooltipBase>
      )}
      {deadline && (
        <TimerBase deadline={deadline} className={cls.ProductInfoTimer} small />
      )}
    </ProductInfoRow>
  );
};

ProductInfoPrice.displayName = 'ProductInfoPrice';
