import React, { FC } from 'react';
import { SliderBase } from '@shared/SliderBase/SliderBase';
import { SectionBase } from '@shared/SectionBase';
import {
	CategoriesSliderItem,
	CategoriesSliderItemProps,
} from './CategoriesSliderItem';

interface CategoriesSliderProps {
	items: CategoriesSliderItemProps[];
}

export const CategoriesSlider: FC<CategoriesSliderProps> = (props) => {
	const { items } = props;

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

	return (
		<SectionBase>
			<SliderBase settings={settings}>
				{items &&
					items.map((slide) => (
						<CategoriesSliderItem
							title={slide.title}
							to={slide.to}
							image={slide.image}
						/>
					))}
			</SliderBase>
		</SectionBase>
	);
};
