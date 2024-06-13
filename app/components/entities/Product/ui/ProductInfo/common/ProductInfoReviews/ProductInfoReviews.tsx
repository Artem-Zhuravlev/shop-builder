import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { InputRating } from '@shared/inputs';
import { ProductInfoRow } from '../ProductInfoRow/ProductInfoRow';
import cls from './ProductInfoReviews.module.scss';

interface ProductInfoReviewsProps {
	productCode: string | number;
	rating: number;
	reviews: number;
}

export const ProductInfoReviews: FC<ProductInfoReviewsProps> = (props) => {
	const { productCode, rating, reviews } = props;
	const t = useTranslations('product');

	return (
		<ProductInfoRow className={cls.ProductInfoReviews}>
			<InputRating
				readonly
				initialValue={rating}
				size={25}
			/>
			<div className={cls.ProductInfoReviewsRange}>{rating}/5</div>
			<div className={cls.ProductInfoReviewsAmount}>
				{t('reviews', { count: reviews })}
			</div>
			<div className={cls.ProductInfoCode}>
				<b>{t('product_code')}: </b>
				{productCode}
			</div>
		</ProductInfoRow>
	);
};

ProductInfoReviews.displayName = 'ProductInfoReviews';
