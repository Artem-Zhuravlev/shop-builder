import React, { FC } from 'react';
import { SliderBase } from '@shared/SliderBase/SliderBase';

export const CategoriesSlider: FC = () => {
	const settings = {
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 5,
	};

	return (
		<SliderBase settings={settings}>
			<div>
				<h3>1</h3>
			</div>
			<div>
				<h3>2</h3>
			</div>
			<div>
				<h3>3</h3>
			</div>
			<div>
				<h3>4</h3>
			</div>
			<div>
				<h3>5</h3>
			</div>
			<div>
				<h3>6</h3>
			</div>
		</SliderBase>
	);
};
