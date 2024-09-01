import React, { type FC, type ReactNode } from 'react';
import cls from '../../SidebarFilter.module.scss';

interface SidebarFilterItemProps {
	amount?: number;
	children?: ReactNode;
}

export const SidebarFilterItem: FC<SidebarFilterItemProps> = (props) => {
	const { amount = 0, children } = props;

	return (
		<div className={cls.SidebarFilterItem}>
			{children}
			{amount > 0 && <span className={cls.suffix}>{amount}</span>}
		</div>
	);
};

SidebarFilterItem.displayName = 'SidebarFilterItem';
