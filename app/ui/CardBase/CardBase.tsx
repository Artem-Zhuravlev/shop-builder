import React, { FC } from 'react';
import cls from './CardBase.module.scss';
import { CardInfo } from './common/CardInfo';
import { CardControls } from './common/CardControls';
import { CardCaption } from './common/CardCaption';
import { CardImages } from './common/CardImages';

interface CardBaseProps {
  to: string;
  slug: string;
  item: {
    images: Array<{
      url: string;
      alt: string;
    }>;
    title: string;
    rating: number;
    price: number;
    old_price?: number;
    tax?: number;
    symbol?: string;
  },
  addToCart: (slug: string) => void;
  addToFavorite: (slug: string) => void;
  quickView: (slug: string) => void;
  productCompare: (slug: string) => void;
}

export const CardBase:FC<CardBaseProps> = (props) => {
  const {
    to,
    slug,
    item: {
      images,
      title,
      rating,
      price,
      old_price,
      tax,
      symbol = '₴'
    },
    addToCart,
    addToFavorite,
    quickView,
    productCompare
  } = props;

  const handleToCard = () => {
    addToCart(slug)
  }

  const handleToFavorite = () => {
    addToFavorite(slug);
  }

  const handleQuickView = () => {
    quickView(slug)
  }

  const handleCompare = () => {
    productCompare(slug);
  }

  return (
    <div
      className={cls.CardBase}
    >
      <CardImages
        to={to}
        images={images}
      />
      <div
        className={cls.CardDescription}
      >
        <CardCaption
          to={to}
          title={title}
          rating={rating}
        />
        <CardControls
          handleToCard={handleToCard}
          handleToFavorite={handleToFavorite}
          handleQuickView={handleQuickView}
          handleCompare={handleCompare}
        />
        <CardInfo
          price={price}
          oldPrice={old_price}
          tax={tax}
          symbol={symbol}
        />
      </div>
    </div>
  )
}