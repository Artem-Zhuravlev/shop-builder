import React, { type FC } from 'react';
import cls from './ProductInfo.module.scss';
import {
	ProductInfoBenefits,
	ProductInfoControls,
	ProductInfoDetails,
	ProductInfoReviews,
	type ProductInfoDetailsProps,
	type ProductInfoPriceProps,
} from './common';
import { ProductInfoPrice } from './common/ProductInfoPrice/ProductInfoPrice';

interface ProductInfoProps
	extends ProductInfoDetailsProps,
		ProductInfoPriceProps {
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
		price,
		oldPrice,
		discount,
		deadline,
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
			<ProductInfoPrice
				price={price}
				oldPrice={oldPrice}
				discount={discount}
				deadline={deadline}
			/>
			<ProductInfoControls />
			<ProductInfoBenefits />
		</div>
	);
};

ProductInfo.displayName = 'ProductInfo';
