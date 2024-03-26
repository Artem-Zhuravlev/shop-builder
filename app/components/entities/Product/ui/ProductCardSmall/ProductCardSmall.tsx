import React, { FC } from 'react';
import Link from 'next/link';
import { HeadingBase } from '@shared/HeadingBase';
import { InputRating } from '@shared/inputs';
import cls from './ProductCardSmall.module.scss';

interface ProductCardSmallProps {
	to: string;
	image: string;
	rating: number;
	title: string;
	price: number;
	symbol?: string;
}

export const ProductCardSmall: FC<ProductCardSmallProps> = (props) => {
	const { to, image, rating, title, price, symbol = '₴' } = props;

	return (
		<article className={cls.ProductCardSmall}>
			<Link
				href={to}
				className={cls.ProductCardSmallImage}>
				<img
					src={image}
					alt={title}
				/>
			</Link>
			<div className={cls.ProductCardSmallDescription}>
				<HeadingBase
					level={5}
					className={cls.ProductCardSmallTitle}>
					<Link href={to}>{title}</Link>
				</HeadingBase>
				<InputRating
					readonly
					initialValue={rating}
					size={18}
				/>
				<div className={cls.ProductCardSmallPrice}>{`${price} ${symbol}`}</div>
			</div>
		</article>
	);
};
