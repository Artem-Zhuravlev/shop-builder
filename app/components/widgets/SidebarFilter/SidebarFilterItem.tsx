import React, { FC } from 'react';
import cls from './SidebarFilter.module.scss';

interface SidebarFilterItemProps {
	title: string;
}

export const SidebarFilterItem: FC<SidebarFilterItemProps> = (props) => {
	return <div className={cls.SidebarFilterItem}></div>;
};
