import React, { FC } from 'react';
import { ContainerBase } from '@/app/ui/ContainerBase';
import { HeaderLogo } from './common';
import cls from './HeaderBase.module.scss';

export const HeaderBase:FC = () => {
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
        </div>
      </ContainerBase>
    </header>
  )
}