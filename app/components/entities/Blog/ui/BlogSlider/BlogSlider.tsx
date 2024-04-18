import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SectionBase } from '@shared/SectionBase';
import { settings } from '@settings/slider/sliderWithThreeColumns';
import { SliderBase, SliderCard } from '@shared/SliderBase';
import { BlogCard, BlogCardProps } from '../BlogCard/BlogCard';

interface BlogSliderProps {
	items: BlogCardProps[];
	title?: string;
}

export const BlogSlider: FC<BlogSliderProps> = (props) => {
	const { title, items } = props;

	return (
		<SectionBase
			title={title}
			secondary>
			<SliderBase settings={settings}>
				{items &&
					items.map(
						({ image, author, comments, viewed, title, publishedAt, to }) => (
							<SliderCard>
								<BlogCard
									key={uuidv4()}
									image={image}
									author={author}
									comments={comments}
									viewed={viewed}
									title={title}
									publishedAt={publishedAt}
									to={to}
								/>
							</SliderCard>
						)
					)}
			</SliderBase>
		</SectionBase>
	);
};
