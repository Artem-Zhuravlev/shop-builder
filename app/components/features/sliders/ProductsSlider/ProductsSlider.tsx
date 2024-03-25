import React, { FC } from 'react';
import { SliderBase } from '@shared/SliderBase/SliderBase';
import { CardBase, CardBaseProps } from '@shared/CardBase';
import cls from './ProductsSlider.module.scss';
import { SectionBase } from '@shared/SectionBase/SectionBase';

interface ProductsSliderProps {
	title: string;
	items?: CardBaseProps[];
}

export const ProductsSlider: FC<ProductsSliderProps> = (props) => {
	const { title, items } = props;

	const settings = {
		slidesToScroll: 1,
		slidesToShow: 4,
		infinite: false,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: false,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				},
			},
		],
	};

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
						<CardBase
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
