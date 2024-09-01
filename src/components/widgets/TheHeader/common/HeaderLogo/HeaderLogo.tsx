import { LogoBase } from '@/components/shared/icons';
import Link from 'next/link';
import React, { type FC } from 'react';
import cls from './HeaderLogo.module.scss';

export const HeaderLogo: FC = () => {
	return (
		<Link href='/' className={cls.HeaderLogo}>
			<LogoBase />
		</Link>
	);
};

HeaderLogo.displayName = 'HeaderLogo';
