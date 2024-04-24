import React, { FC, ReactNode } from 'react';
import cls from './ProductInfoDetails.module.scss';

interface ProductInfoDetailsItemProps {
	children: ReactNode;
	label: string;
}

export const ProductInfoDetailsItem: FC<ProductInfoDetailsItemProps> = (
	props
) => {
	const { children, label } = props;

	return (
		<li className={cls.ProductInfoDetailsItem}>
			<strong className={cls.ProductInfoDetailsLabel}>{label}</strong>
			<span>{children}</span>
		</li>
	);
};
