import React, { FC } from 'react';
import {
	ProductsFilterGridSwitcher,
	ProductsFilterLimit,
	ProductsFilterCompare,
} from './common';
import cls from './ProductsFilter.module.scss';

interface ProductsFilterProps {
	handleSwitchLayout: (value: string) => void;
}

export const ProductsFilter: FC<ProductsFilterProps> = (props) => {
	const { handleSwitchLayout } = props;

	return (
		<nav className={cls.ProductsFilter}>
			<ProductsFilterGridSwitcher handleSwitchLayout={handleSwitchLayout} />
			<ProductsFilterLimit />
			<ProductsFilterCompare />
		</nav>
	);
};
