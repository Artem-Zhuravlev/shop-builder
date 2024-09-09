import React, { type ReactNode, type FC } from 'react';
import cls from './AdminTableLayout.module.scss';

interface AdminTableLayoutProps {
	navbar: ReactNode;
	children: ReactNode;
	footer: ReactNode;
}

export const AdminTableLayout: FC<AdminTableLayoutProps> = (props) => {
	const { children, navbar, footer } = props;

	return (
		<div className={cls.AdminTableLayout}>
			<header className={cls.AdminTableLayoutHeader}>{navbar}</header>
			{children}
			<footer className={cls.AdminTableLayoutFooter}>{footer}</footer>
		</div>
	);
};
