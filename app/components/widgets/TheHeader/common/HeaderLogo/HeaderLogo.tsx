import { LogoBase } from '@shared/icons';
import Link from 'next/link';
import { FC } from 'react';
import cls from './HeaderLogo.module.scss';

export const HeaderLogo: FC = () => {
  return (
    <Link href='/' className={cls.HeaderLogo}>
      <LogoBase />
    </Link>
  );
};

HeaderLogo.displayName = 'HeaderLogo';
