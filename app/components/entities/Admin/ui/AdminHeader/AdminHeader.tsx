'use client';
import { DropdownBase } from '@shared/DropdownBase';
import { LogoBase } from '@shared/icons';
import { IconUser } from '@shared/icons/IconUser/IconUser';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { type FC } from 'react';
import cls from './AdminHeader.module.scss';

export const AdminHeader: FC = () => {
	const t = useTranslations();

	const handleLogout = () => {
		// TODO: handle logout
		console.log('logout');
	};

	return (
		<header className={cls.AdminHeader}>
			<Link href='/admin' className={cls.AdminHeaderLogo}>
				<LogoBase />
			</Link>
			<div className={cls.AdminHeaderControls}>
				<DropdownBase
					direction='right'
					list={[
						{
							to: '/admin/profile',
							value: t('admin.profile'),
							icon: <span className='icon-user' />,
						},
						{
							value: t('base.logout'),
							onClick: () => handleLogout(),
							icon: <span className='icon-exit' />,
						},
					]}
				>
					<IconUser /> Admin
				</DropdownBase>
			</div>
		</header>
	);
};

AdminHeader.displayName = 'AdminHeader';
