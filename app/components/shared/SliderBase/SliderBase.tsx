import React, { FC, ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderBaseProps {
	settings: Settings;
	children: ReactNode;
}

export const SliderBase: FC<SliderBaseProps> = (props) => {
	const { children, settings } = props;

	return <Slider {...settings}>{children}</Slider>;
};
