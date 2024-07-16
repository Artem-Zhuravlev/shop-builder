import React, { type ReactNode } from 'react';
import { AdminHeader } from '@entities/Admin/ui/AdminHeader/AdminHeader';
import { AdminSidebar } from '@entities/Admin/ui/AdminSidebar/AdminSidebar';
import cls from './AdminLayout.module.scss';

interface LocaleLayoutProps {
	children: ReactNode;
}

export default async function AdminLayout({ children }: LocaleLayoutProps) {
	return (
		<div className={cls.AdminLayout}>
			<AdminHeader className={cls.AdminHeader} />
			<AdminSidebar />
			<main className={cls.AdminMain}>{children}</main>
		</div>
	);
}
