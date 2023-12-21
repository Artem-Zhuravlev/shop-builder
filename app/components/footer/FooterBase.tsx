import React, { FC } from 'react';
import cls from './FooterBase.module.scss';
import { ContainerBase } from '@/app/ui/ContainerBase';
import { FooterLogo } from './common';

export const FooterBase: FC = () => {
  return (
    <footer
      className={cls.FooterBase}
    >
      <ContainerBase>
        <div
          className={cls.FooterBaseTop}>
          <FooterLogo />
        </div>
        footer
      </ContainerBase>
    </footer>
  )
}