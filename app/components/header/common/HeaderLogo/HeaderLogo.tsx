import React, { FC } from 'react';
import Link from 'next/link';
import { LogoBase } from '@/app/ui/icons/LogoBase';

interface HeaderLogoProps {
  className: string;
}

export const HeaderLogo:FC<HeaderLogoProps> = (props) => {
  const { className } = props;

  return (
    <Link
      href="/"
      className={className}
    >
      <LogoBase />
    </Link>
  )
}