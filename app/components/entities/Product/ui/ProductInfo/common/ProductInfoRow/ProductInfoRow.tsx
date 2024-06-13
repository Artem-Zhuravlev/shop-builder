import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './ProductInfoRow.module.scss';

interface ProductInfoRowProps {
	className?: string;
	children: ReactNode;
}

export const ProductInfoRow: FC<ProductInfoRowProps> = (props) => {
	const { className, children } = props;

	return (
		<div className={classNames(cls.ProductInfoRow, className)}>{children}</div>
	);
};

ProductInfoRow.displayName = 'ProductInfoRow';
