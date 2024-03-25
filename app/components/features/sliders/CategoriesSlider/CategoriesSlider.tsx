import React, { FC } from 'react';
import { SliderBase } from '@shared/SliderBase';
import { SectionBase } from '@shared/SectionBase';
import { settings } from '../settings/sliderWithFourColumns';
import {
	CategoriesSliderItem,
	CategoriesSliderItemProps,
} from './common/CategoriesSliderItem';

interface CategoriesSliderProps {
	items: CategoriesSliderItemProps[];
}

export const CategoriesSlider: FC<CategoriesSliderProps> = (props) => {
	const { items } = props;
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
