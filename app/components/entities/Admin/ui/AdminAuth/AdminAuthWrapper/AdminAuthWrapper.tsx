import React, { FC, ReactNode } from 'react';
import { ContainerBase } from '@shared/ContainerBase';
import cls from './AdminAuthWrapper.module.scss';

interface AdminAuthWrapperProps {
	children: ReactNode;
}

export const AdminAuthWrapper: FC<AdminAuthWrapperProps> = (props) => {
	const { children } = props;

	return (
		<div className={cls.AdminAuthWrapper}>
			<ContainerBase
				small
				className={cls.AdminAuthContainer}>
				{children}
			</ContainerBase>
		</div>
	);
};
