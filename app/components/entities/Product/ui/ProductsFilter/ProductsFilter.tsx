import React, { type FC } from 'react';
import cls from './ProductsFilter.module.scss';
import {
	ProductsFilterCompare,
	ProductsFilterGridSwitcher,
	ProductsFilterLimit,
	ProductsFilterSort,
} from './common';

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

ProductsFilter.displayName = 'ProductsFilter';
