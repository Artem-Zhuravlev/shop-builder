import React, { FC, useId } from 'react';
import { SectionBase } from '@shared/SectionBase';
import { settings } from '@settings/slider/sliderWithThreeColumns';
import { SliderBase, SliderCard } from '@shared/SliderBase';
import { BlogCard, BlogCardProps } from '../BlogCard/BlogCard';

interface BlogSliderProps {
	title?: string;
	items: BlogCardProps[];
}

export const BlogSlider: FC<BlogSliderProps> = (props) => {
	const { title, items } = props;
	const id = useId();

	return (
		<SectionBase
			title={title}
			secondary>
			<SliderBase settings={settings}>
				{items &&
					items.map(
						(
							{ image, author, comments, viewed, title, published_at, to },
							index
						) => (
							<SliderCard>
								<BlogCard
									key={`${id}-${index}`}
									image={image}
									author={author}
									comments={comments}
									viewed={viewed}
									title={title}
									published_at={published_at}
									to={to}
								/>
							</SliderCard>
						)
					)}
			</SliderBase>
		</SectionBase>
	);
};
