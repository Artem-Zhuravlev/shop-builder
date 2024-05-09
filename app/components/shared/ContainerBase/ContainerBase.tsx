import React, { FC, ReactNode } from 'react';
import cls from './ContainerBase.module.scss';
import classNames from 'classnames';

interface ContainerBaseProps {
	children: ReactNode;
	className?: string;
	small?: boolean;
}

export const ContainerBase: FC<ContainerBaseProps> = (props) => {
	const { children, className, small } = props;
	const containerClasses = classNames(cls.ContainerBase, className, {
		[cls.small]: small,
	});

	return <div className={containerClasses}>{children}</div>;
};
