import React, { FC } from 'react';
import { ContainerBase } from '@/app/ui/ContainerBase';
import { HeaderLogo, HeaderNav, IMenuItem } from './common';
import cls from './HeaderBase.module.scss';

interface HeaderBaseProps {
  items: IMenuItem[]
}

export const HeaderBase:FC<HeaderBaseProps> = (props) => {
  const { items } = props

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
        </div>
      </ContainerBase>
    </header>
  )
}