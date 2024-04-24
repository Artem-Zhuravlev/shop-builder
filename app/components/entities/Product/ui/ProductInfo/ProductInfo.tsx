import React, { FC } from 'react';
import {
	ProductInfoReviews,
	ProductInfoDetails,
	ProductInfoDetailsProps,
} from './common';
import cls from './ProductInfo.module.scss';

interface ProductInfoProps extends ProductInfoDetailsProps {
	productCode: string | number;
	title: string;
	reviews: number;
}

export const ProductInfo: FC<ProductInfoProps> = (props) => {
	const {
		productCode,
		title,
		reviews,
		availability,
		brand,
		rewardPoints,
		viewed,
	} = props;

	return (
		<div className={cls.ProductInfo}>
			<h1 className={`h2 ${cls.ProductInfoTitle}`}>{title}</h1>
			<ProductInfoReviews
				rating={3}
				reviews={reviews}
				productCode={productCode}
			/>
			<ProductInfoDetails
				availability={availability}
				brand={brand}
				rewardPoints={rewardPoints}
				viewed={viewed}
			/>
		</div>
	);
};
