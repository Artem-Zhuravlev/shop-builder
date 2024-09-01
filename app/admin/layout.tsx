import React, { type ReactNode } from 'react';
import { AdminHeader, AdminSidebar } from '@/components/entities/Admin';
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
