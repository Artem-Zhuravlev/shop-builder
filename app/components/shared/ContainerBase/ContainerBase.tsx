import React, { FC, ReactNode } from 'react';
import cls from './ContainerBase.module.scss';

interface ContainerBaseProps {
	children: ReactNode;
}

export const ContainerBase: FC<ContainerBaseProps> = ({ children }) => {
	return <div className={cls.ContainerBase}>{children}</div>;
};
