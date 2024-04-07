import React, { FC, ReactNode, useState } from 'react';
import cls from './SideDrawer.module.scss';
import classNames from 'classnames';

interface SideDrawerProps {
	children: ReactNode;
	title?: string;
	visible: boolean;
	drawerClose: (visible: boolean) => void;
}

export const SideDrawer: FC<SideDrawerProps> = (props) => {
	const { children, title, visible, drawerClose } = props;

	const [open, setOpen] = useState(visible);

	const onDrawerClose = () => {
		setOpen(false);
		drawerClose(false);
	};

	const sideDrawerClasses = classNames(
		cls.SideDrawer,
		open ? cls.SideDrawerOpen : null
	);

	return (
		<div
			data-testid='side-drawer'
			className={sideDrawerClasses}>
			<button
				data-testid='close-button'
				type='button'
				className={cls.SideDrawerClose}
				onClick={onDrawerClose}>
				<span className='icon-cross' />
			</button>
			{title && <h4 className={cls.SideDrawerTitle}>{title}</h4>}
			<div className={cls.SideDrawerContent}>{children}</div>
		</div>
	);
};
