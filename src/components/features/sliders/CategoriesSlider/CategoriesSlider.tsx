import { SectionBase } from '@/components/shared/SectionBase';
import { SliderBase, SliderCard } from '@/components/shared/SliderBase';
import { settings } from '@/utils/settings/slider/sliderWithFourColumns';
import React, { type FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
	CategoriesSliderItem,
	type CategoriesSliderItemProps,
} from './common/CategoriesSliderItem';

interface CategoriesSliderProps {
	items: CategoriesSliderItemProps[];
}

export const CategoriesSlider: FC<CategoriesSliderProps> = (props) => {
	const { items } = props;

	return (
		<SectionBase>
			<SliderBase settings={settings}>
				{items?.map((item) => (
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
