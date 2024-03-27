import React, { FC, ReactNode } from 'react';
import cls from './ContainerBase.module.scss';
import classNames from 'classnames';

interface ContainerBaseProps {
	children: ReactNode;
	className?: string;
}

export const ContainerBase: FC<ContainerBaseProps> = (props) => {
	const { children, className } = props;
	const containerClasses = classNames(cls.ContainerBase, className);

	return <div className={containerClasses}>{children}</div>;
};
