import React, { FC } from 'react';
import { ContainerBase } from '@/app/ui/ContainerBase';
import {
  HeaderLogo,
  HeaderNav,
  IMenuItem,
  HeaderPhone,
  HeaderBurger
} from './common';
import cls from './HeaderBase.module.scss';

interface HeaderBaseProps {
  items: IMenuItem[];
  phones: string[]
}

export const HeaderBase:FC<HeaderBaseProps> = (props) => {
  const {
    items,
    phones
  } = props;

  const toggleBurgerMenu = (isActive: boolean) => {
    console.log(isActive);
  }

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
        </div>
      </ContainerBase>
      <div
        className={cls.HeaderBottom}
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