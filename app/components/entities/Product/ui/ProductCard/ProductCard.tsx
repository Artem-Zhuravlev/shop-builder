import React, { FC } from 'react';
import { useSelector } from '@lib/redux';
import classNames from 'classnames';
import cls from './ProductCard.module.scss';
import { CardInfo } from './common/CardInfo';
import { CardControls } from './common/CardControls';
import { CardCaption } from './common/CardCaption';
import { CardImages } from './common/CardImages';

export interface ProductCardProps {
	slug: string;
	images: { url: string; alt: string }[];
	title: string;
	rating: number;
	price: number;
	oldPrice?: number;
	tax?: number;
	currency?: string;
	className?: string;
	addToCart?: (slug: string) => void;
	addToFavorite?: (slug: string) => void;
	quickView?: (slug: string) => void;
	productCompare?: (slug: string) => void;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
	const {
		slug,
		images,
		title,
		rating,
		price,
		oldPrice,
		tax,
		currency,
		className,
		addToCart,
		addToFavorite,
		quickView,
		productCompare,
	} = props;

	const defaultCurrency = useSelector((state) => state.product.currency);

	const handleToCard = () => {
		if (addToCart) addToCart(slug);
	};

	const handleToFavorite = () => {
		if (addToFavorite) addToFavorite(slug);
	};

	const handleQuickView = () => {
		if (quickView) quickView(slug);
	};

	const handleCompare = () => {
		if (productCompare) productCompare(slug);
	};

	return (
		<div className={classNames(cls.ProductCard, className)}>
			<CardImages
				to={`/${slug}`}
				images={images}
			/>
			<div className={cls.CardDescription}>
				<CardCaption
					to={`/${slug}`}
					title={title}
					rating={rating}
				/>
				<CardControls
					handleToCard={handleToCard}
					handleToFavorite={handleToFavorite}
					handleQuickView={handleQuickView}
					handleCompare={handleCompare}
				/>
				<CardInfo
					price={price}
					oldPrice={oldPrice}
					tax={tax}
					currency={currency || defaultCurrency}
				/>
			</div>
		</div>
	);
};

ProductCard.displayName = 'ProductCard';
