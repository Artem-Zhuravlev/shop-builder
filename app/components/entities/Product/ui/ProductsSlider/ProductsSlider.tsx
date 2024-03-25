import React, { FC } from 'react';
import { SliderBase } from '@shared/SliderBase';
import {
	ProductCard,
	ProductCardProps,
} from '@entities/Product/ui/ProductCard';
import { SectionBase } from '@shared/SectionBase';
import { settings } from '@settings/slider/sliderWithFourColumns';
import cls from './ProductsSlider.module.scss';
interface ProductsSliderProps {
	title: string;
	items?: ProductCardProps[];
}

export const ProductsSlider: FC<ProductsSliderProps> = (props) => {
	const { title, items } = props;
	const addToCart = (slug: string) => {};
	const addToFavorite = (slug: string) => {};
	const quickView = (slug: string) => {};
	const productCompare = (slug: string) => {};

	return (
		<SectionBase title={title}>
			{items && (
				<SliderBase
					settings={settings}
					className={cls.ProductSlider}>
					{items.map((slide, index) => (
						<ProductCard
							key={`${index}_${slide.slug}`}
							to={slide.to}
							item={slide.item}
							slug={slide.slug}
							addToCart={addToCart}
							addToFavorite={addToFavorite}
							quickView={quickView}
							productCompare={productCompare}
							className={cls.ProductSliderItem}
						/>
					))}
				</SliderBase>
			)}
		</SectionBase>
	);
};
