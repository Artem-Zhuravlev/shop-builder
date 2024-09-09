'use client';
import React, { useEffect, useState, type FC } from 'react';
import cls from './AdminTableNavbar.module.scss';
import { useTranslations } from 'next-intl';
import { ButtonBase } from '@/components/shared/ButtonBase';
import { useRouter } from 'next/navigation';

interface AdminTableNavbarProps {
	id?: number;
	title: string;
	route: string;
	onDelete: (id: number) => void;
}

export const AdminTableNavbar: FC<AdminTableNavbarProps> = ({
	id,
	title,
	route,
	onDelete,
}) => {
	const [showDeleteBtn, setShowDeleteBtn] = useState(false);
	const t = useTranslations('base');
	const router = useRouter();

	useEffect(() => {
		setShowDeleteBtn(id !== undefined);
	}, [id]);

	const handleDelete = () => {
		if (id !== undefined) {
			onDelete(id);
		}
	};

	return (
		<nav className={cls.AdminTableNavbar}>
			<h3 className='mb-0'>{title}</h3>
			<ul className={cls.AdminTableNavbarList}>
				<li className={cls.AdminTableNavbarItem}>
					<ButtonBase
						variant='success'
						onClick={() => router.push(`${route}/new`)}
					>
						{t('add_new')}
					</ButtonBase>
				</li>
				{showDeleteBtn && (
					<li className={cls.AdminTableNavbarItem}>
						<ButtonBase
							variant='danger'
							onClick={handleDelete}
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
