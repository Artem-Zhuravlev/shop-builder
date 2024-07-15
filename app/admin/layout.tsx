import React, { type ReactNode } from 'react';
import { AdminHeader } from '@entities/Admin/ui/AdminHeader/AdminHeader';
import { AdminSidebar } from '@entities/Admin/ui/AdminSidebar/AdminSidebar';

interface LocaleLayoutProps {
	children: ReactNode;
}

export default async function AdminLayout({ children }: LocaleLayoutProps) {
	return (
		<>
			<AdminHeader />
			<AdminSidebar />
			<main>{children}</main>
		</>
	);
}
