import React, { FC } from 'react';
import { ProductsFilterGridSwitcher } from './common/ProductsFilterGridSwitcher/ProductsFilterGridSwitcher';
import cls from './ProductsFilter.module.scss';

interface ProductsFilterProps {
	handleSwitchLayout: (value: string) => void;
}

export const ProductsFilter: FC<ProductsFilterProps> = (props) => {
	const { handleSwitchLayout } = props;

	return (
		<nav className={cls.ProductsFilter}>
			<ProductsFilterGridSwitcher handleSwitchLayout={handleSwitchLayout} />
		</nav>
	);
};
