import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
					items.map((item) => (
						<SliderCard key={uuidv4()}>
							<CategoriesSliderItem
								title={item.title}
								to={item.to}
								image={item.image}
							/>
						</SliderCard>
					))}
			</SliderBase>
		</SectionBase>
	);
};

CategoriesSlider.displayName = 'CategoriesSlider';
