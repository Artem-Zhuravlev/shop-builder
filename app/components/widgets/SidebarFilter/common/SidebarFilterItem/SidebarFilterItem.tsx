import React, { FC, ReactNode } from 'react';
import cls from './SidebarFilterItem.module.scss';

interface SidebarFilterItemProps {
	amount?: number;
	children?: ReactNode;
}

export const SidebarFilterItem: FC<SidebarFilterItemProps> = (props) => {
	const { amount = 0, children } = props;

	return (
		<div className={cls.SidebarFilterItem}>
			{children}
			{amount > 0 && (
				<span className={cls.SidebarFilterItemAmount}>{amount}</span>
			)}
		</div>
	);
};
