'use client';
import React, { type ReactNode, useEffect } from 'react';
import { useDispatch } from '@/lib/redux';
import { AdminHeader, AdminSidebar } from '@/components/entities/Admin';
import cls from './AdminLayout.module.scss';
import { getSettings } from '@/lib/redux';

interface LocaleLayoutProps {
	children: ReactNode;
}

export default function AdminLayout({ children }: LocaleLayoutProps) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSettings());
	}, [dispatch]);

	return (
		<div className={cls.AdminLayout}>
			<AdminHeader className={cls.AdminHeader} />
			<AdminSidebar />
			<main className={cls.AdminMain}>{children}</main>
		</div>
	);
}
