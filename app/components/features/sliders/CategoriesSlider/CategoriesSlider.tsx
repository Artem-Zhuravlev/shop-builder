import React, { FC } from 'react';
import { SliderBase, SliderCard } from '@shared/SliderBase';
import { SectionBase } from '@shared/SectionBase';
import { settings } from '@settings/slider/sliderWithFourColumns';
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
						<SliderCard>
							<CategoriesSliderItem
								title={slide.title}
								to={slide.to}
								image={slide.image}
							/>
						</SliderCard>
					))}
			</SliderBase>
		</SectionBase>
	);
};
