import React, { type ReactNode, type FC } from 'react';
import cls from './AdminTableLayout.module.scss';

interface AdminTableLayoutProps {
	children: ReactNode;
	filter?: ReactNode;
}

export const AdminTableLayout: FC<AdminTableLayoutProps> = (props) => {
	const { children, filter } = props;

	return (
		<div className={cls.AdminTableLayout}>
			<div className={cls.AdminTableLayoutMain}>{children}</div>
			{filter && <div className={cls.AdminTableLayoutFilter}>{filter}</div>}
		</div>
	);
};
