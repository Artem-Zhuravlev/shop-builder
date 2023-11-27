import React, { FC } from 'react';
import { ContainerBase } from '@/app/ui/ContainerBase';
import {
  HeaderLogo,
  HeaderNav,
  IMenuItem,
  HeaderPhone
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
  } = props

  return (
    <header
      className={cls.Header}
    >
      <ContainerBase>
        <div
          className={cls.HeaderTop}
        >
          <HeaderLogo
            className={cls.HeaderLogo}
          />
          <HeaderNav
            items={items}
          />
          <HeaderPhone
            items={phones}
          />
          <button
            type="button"
            className={cls.HeaderBurger}
          ></button>
        </div>
      </ContainerBase>
    </header>
  )
}