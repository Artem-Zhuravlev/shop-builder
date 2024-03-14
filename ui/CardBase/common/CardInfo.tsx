import React, { FC } from 'react';
import cls from '../CardBase.module.scss';

interface CardInfoProps {
  price: number;
  oldPrice?: number;
  tax?: number;
  symbol: string
}

export const CardInfo:FC<CardInfoProps> = ({
  price,
  oldPrice,
  tax,
  symbol
}) => {
  return (
    <div
      className={cls.CardInfo}
    >
      <span className={cls.CardPriceNew}>
        {price } {symbol}
      </span>
      {oldPrice && (
        <s className={cls.CardPriceOld}>
          {oldPrice} {symbol}
        </s>
      )}
      {tax && (
        <span className={cls.CardPriceTax}>
          {`-${tax}%`}
        </span>
      )}
    </div>
  )
}