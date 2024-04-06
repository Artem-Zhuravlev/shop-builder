import React, { FC, useId } from 'react';
import { settings } from '@settings/slider/sliderWithFourColumns';
import { SliderBase, SliderCard } from '@shared/SliderBase';
import { SectionBase } from '@shared/SectionBase';
import { ProductCard, ProductCardProps } from '../ProductCard';
import cls from './ProductsSlider.module.scss';
interface ProductsSliderProps {
	title: string;
	items?: ProductCardProps[];
}

export const ProductsSlider: FC<ProductsSliderProps> = (props) => {
	const { title, items } = props;
	const id = useId();
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
					{items.map(
						({ images, slug, title, rating, price, old_price, tax }, index) => (
							<SliderCard>
								<ProductCard
									key={`${id}-${index}`}
									images={images}
									title={title}
									rating={rating}
									price={price}
									old_price={old_price}
									tax={tax}
									slug={slug}
									addToCart={addToCart}
									addToFavorite={addToFavorite}
									quickView={quickView}
									productCompare={productCompare}
									className={cls.ProductSliderItem}
								/>
							</SliderCard>
						)
					)}
				</SliderBase>
			)}
		</SectionBase>
	);
};
