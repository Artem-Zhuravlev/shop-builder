import { LogoBase } from '@shared/icons';
import Link from 'next/link';
import { FC } from 'react';
import cls from './FooterLogo.module.scss';

export const FooterLogo: FC = () => {
  return (
    <Link href='/' className={cls.FooterLogo}>
      <LogoBase />
    </Link>
  );
};

FooterLogo.displayName = 'FooterLogo';
