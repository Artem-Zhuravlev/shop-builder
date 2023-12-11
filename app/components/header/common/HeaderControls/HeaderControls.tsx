import React, { FC } from 'react';
import cls from './HeaderControls.module.scss';
import { useTranslations } from 'next-intl';

interface HeaderControlsProps {
  cartTotal?: number
}

export const HeaderControls:FC<HeaderControlsProps> = (props) => {
  const { cartTotal = 0 } = props;

  const t = useTranslations();

  return (
    <div
      className={cls.HeaderControls}
    >
      <button
        type="button"
        aria-label={t('base.compare')}
        className={cls.HeaderControlsBtn}
      >
        <span className="icon-loop2" />
      </button>
      <button
        type="button"
        aria-label={t('base.wishlist')}
        className={cls.HeaderControlsBtn}
      >
        <span className="icon-heart" />
      </button>
      <button
        type="button"
        aria-label={t('base.cart_total')}
        className={cls.HeaderControlsBtn}
      >
        <span
          className={cls.CartItemTotal}
        >
          {cartTotal}
        </span>
        <span className="icon-cart" />
      </button>
    </div>
  )
}