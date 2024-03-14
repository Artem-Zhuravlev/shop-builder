import React, { FC } from 'react';
import cls from './TheFooter.module.scss';
import { ContainerBase } from '@/ui/ContainerBase';
import { FooterLogo } from './common';

export const TheFooter: FC = () => {
	return (
		<footer className={cls.Footer}>
			<ContainerBase>
				<div className={cls.FooterTop}>
					<FooterLogo />
				</div>
				footer
			</ContainerBase>
		</footer>
	);
};
