import { SectionBase } from '@shared/SectionBase';
import React, { FC } from 'react';
import { settings } from '../settings/sliderWithThreeColumns';
import { SliderBase } from '@shared/SliderBase';

interface BlogSliderProps {
	title?: string;
}

export const BlogSlider: FC<BlogSliderProps> = (props) => {
	const { title } = props;

	return (
		<SectionBase title={title}>
			<SliderBase settings={settings}></SliderBase>
		</SectionBase>
	);
};
