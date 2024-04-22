import React, { FC } from 'react';
import { ProductsFilterGridSwitcher } from './common/ProductsFilterGridSwitcher/ProductsFilterGridSwitcher';
import cls from './ProductsFilter.module.scss';

export const ProductsFilter: FC = () => {
	const handleSwitchLayout = (value: string) => {
		console.log(value);
	};

	return (
		<nav className={cls.ProductsFilter}>
			<ProductsFilterGridSwitcher handleSwitchLayout={handleSwitchLayout} />
		</nav>
	);
};
