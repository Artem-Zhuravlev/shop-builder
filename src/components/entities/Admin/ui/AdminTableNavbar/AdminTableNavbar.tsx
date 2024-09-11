'use client';
import React, { type FC } from 'react';
import cls from './AdminTableNavbar.module.scss';
import { useTranslations } from 'next-intl';
import { ButtonBase } from '@/components/shared/ButtonBase';
import { useRouter } from 'next/navigation';

interface AdminTableNavbarProps {
	id?: number;
	title: string;
	route: string;
	onDelete: () => void;
	isDeleteBtn: boolean;
}

export const AdminTableNavbar: FC<AdminTableNavbarProps> = ({
	id,
	title,
	route,
	isDeleteBtn,
	onDelete,
}) => {
	const t = useTranslations('base');
	const router = useRouter();

	return (
		<nav className={cls.AdminTableNavbar}>
			<h4 className='mb-0'>{title}</h4>
			<ul className={cls.AdminTableNavbarList}>
				<li className={cls.AdminTableNavbarItem}>
					<ButtonBase
						variant='success'
						onClick={() => router.push(`${route}/new`)}
					>
						{t('add_new')}
					</ButtonBase>
				</li>
				{isDeleteBtn && (
					<li className={cls.AdminTableNavbarItem}>
						<ButtonBase
							variant='danger'
							onClick={() => onDelete()}
							data-testid='delete'
						>
							<span className='icon-bin' />
						</ButtonBase>
					</li>
				)}
			</ul>
		</nav>
	);
};
