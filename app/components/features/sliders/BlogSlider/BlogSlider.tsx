import { SectionBase } from '@shared/SectionBase';
import React, { FC } from 'react';

interface BlogSliderProps {
	title?: string;
}

export const BlogSlider: FC<BlogSliderProps> = (props) => {
	const { title } = props;

	return <SectionBase title={title}>Blog slider</SectionBase>;
};
