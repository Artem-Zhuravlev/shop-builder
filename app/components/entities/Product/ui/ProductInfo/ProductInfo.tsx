import React, { FC } from 'react';
import { ProductInfoReviews } from './common';
import cls from './ProductInfo.module.scss';

interface ProductInfoProps {
	productCode: string | number;
	title: string;
	reviews: number;
}

export const ProductInfo: FC<ProductInfoProps> = (props) => {
	const { productCode, title, reviews } = props;

	return (
		<div className={cls.ProductInfo}>
			<h1 className={`h2 ${cls.ProductInfoTitle}`}>{title}</h1>
			<ProductInfoReviews
				rating={3}
				reviews={reviews}
				productCode={productCode}
			/>
		</div>
	);
};
