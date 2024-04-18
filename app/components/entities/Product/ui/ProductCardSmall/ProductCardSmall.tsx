import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from '@lib/redux';
import { InputRating } from '@shared/inputs';
import cls from './ProductCardSmall.module.scss';

interface ProductCardSmallProps {
	image: string;
	price: number;
	rating: number;
	currency?: string;
	title: string;
	to: string;
}

export const ProductCardSmall: FC<ProductCardSmallProps> = (props) => {
	const { image, price, rating, currency, title, to } = props;
	const defaultCurrency = useSelector((state) => state.product.currency);

	return (
		<article className={cls.ProductCardSmall}>
			<Link
				href={to}
				className={cls.ProductCardSmallImage}>
				<Image
					src={image}
					alt={title}
					width={105}
					height={105}
				/>
			</Link>
			<div className={cls.ProductCardSmallDescription}>
				<h5 className={cls.ProductCardSmallTitle}>
					<Link href={to}>{title}</Link>
				</h5>
				<InputRating
					readonly
					initialValue={rating}
					size={18}
				/>
				<div
					className={
						cls.ProductCardSmallPrice
					}>{`${price} ${currency || defaultCurrency}`}</div>
			</div>
		</article>
	);
};
