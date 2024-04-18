import React, { FC, ReactNode } from 'react';
import cls from '../InfoList.module.scss';

interface InfoListItemProps {
	children: ReactNode;
	label: string;
}

export const InfoListItem: FC<InfoListItemProps> = (props) => {
	const { children, label } = props;

	return (
		<li className={cls.InfoListItem}>
			<strong className={cls.InfoListLabel}>{label}</strong>
			<span>{children}</span>
		</li>
	);
};
