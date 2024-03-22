import React, { FC } from 'react';
import Link from 'next/link';
import cls from './FooterLogo.module.scss';
import { LogoBase } from '@shared/icons/LogoBase';

export const FooterLogo: FC = () => {
	return (
		<Link
			href='/'
			className={cls.FooterLogo}>
			<LogoBase />
		</Link>
	);
};
