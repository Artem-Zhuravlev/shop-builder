import React, { FC, ReactNode } from 'react';
import cls from '../InfoList.module.scss';

interface InfoListItemProps {
	label: string;
	children: ReactNode;
}

export const InfoListItem: FC<InfoListItemProps> = ({ label, children }) => {
	return (
		<li className={cls.InfoListItem}>
			<strong className={cls.InfoListLabel}>{label}</strong>
			<span>{children}</span>
		</li>
	);
};
