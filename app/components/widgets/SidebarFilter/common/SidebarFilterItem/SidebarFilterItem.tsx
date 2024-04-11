import React, { FC, ReactNode } from 'react';
import cls from './SidebarFilterItem.module.scss';

interface SidebarFilterItemProps {
	children?: ReactNode;
	amount?: number;
}

export const SidebarFilterItem: FC<SidebarFilterItemProps> = (props) => {
	const { children, amount = 0 } = props;

	return (
		<div className={cls.SidebarFilterItem}>
			{children}
			{amount > 0 && (
				<span className={cls.SidebarFilterItemAmount}>{amount}</span>
			)}
		</div>
	);
};
