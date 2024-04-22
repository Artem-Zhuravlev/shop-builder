import React, { FC } from 'react';
import {
	ProductsFilterGridSwitcher,
	ProductsFilterLimit,
	ProductsFilterCompare,
	ProductsFilterSort,
} from './common';
import cls from './ProductsFilter.module.scss';

export const ProductsFilter: FC = () => {
	return (
		<nav className={cls.ProductsFilter}>
			<ProductsFilterGridSwitcher />
			<ProductsFilterLimit />
			<ProductsFilterCompare />
			<ProductsFilterSort />
		</nav>
	);
};
