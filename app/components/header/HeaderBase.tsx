import React, { FC, useState } from 'react';
import { ContainerBase } from '@/ui/ContainerBase';
import { classNames } from '@/utils/classNames/classNames';
import {
  HeaderLogo,
  HeaderNav,
  IMenuItem,
  HeaderPhone,
  HeaderBurger,
  HeaderSearch,
  HeaderControls
} from './common';
import cls from './HeaderBase.module.scss';

interface HeaderBaseProps {
  items: IMenuItem[];
  phones: string[];
  cartTotal?: number;
  handleCompare: () => void;
  handleWishlist: () => void;
  handleAddToCart: () => void;
}

export const HeaderBase:FC<HeaderBaseProps> = (props) => {
  const {
    items,
    phones,
    cartTotal = 0,
    handleCompare,
    handleWishlist,
    handleAddToCart
  } = props;

  const [isActive, setIsActive] = useState(false);

  const toggleBurgerMenu = (isActive: boolean) => {
    setIsActive(!isActive);
  }

  const mods: Record<string, boolean> = {
    [cls.HeaderBottomActive]: isActive
  };

  return (
    <header
      className={cls.Header}
    >
      <ContainerBase>
        <div className={cls.HeaderTop}>
          <HeaderLogo />
          <HeaderBurger
            toggleBurger={toggleBurgerMenu}
          />
          <HeaderSearch />
          <HeaderControls
            cartTotal={cartTotal}
            handleCompare={handleCompare}
            handleWishlist={handleWishlist}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </ContainerBase>
      <div
        className={classNames(cls.HeaderBottom, mods)}
      >
        <ContainerBase>
          <div className={cls.HeaderBottomRow}>
            
            <HeaderNav
              items={items}
            />
            <HeaderPhone
              items={phones}
            />
          </div>
        </ContainerBase>
      </div>
    </header>
  )
}