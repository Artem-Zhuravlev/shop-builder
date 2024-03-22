import React, { FC } from 'react';
import Link from 'next/link';
import cls from './HeaderLogo.module.scss';
import { LogoBase } from '@shared/icons/LogoBase';

export const HeaderLogo: FC = () => {
	return (
		<Link
			href='/'
			className={cls.HeaderLogo}>
			<LogoBase />
		</Link>
	);
};
