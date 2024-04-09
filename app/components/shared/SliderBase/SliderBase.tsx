import React, { FC, forwardRef, ReactNode, Ref, RefObject } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cls from './SliderBase.module.scss';

interface SliderBaseProps {
	settings: Settings;
	children: ReactNode;
	className?: string;
	ref?: Ref<Slider>;
}

interface ArrowProps {
	onClick?: () => void;
}

const ArrowPrev: FC<ArrowProps> = ({ onClick }) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`${cls.sliderArrow} ${cls.sliderArrowPrev}`}>
			<span className='icon-arrow-left2' />
		</button>
	);
};

const ArrowNext: FC<ArrowProps> = ({ onClick }) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`${cls.sliderArrow} ${cls.sliderArrowNext}`}>
			<span className='icon-arrow-right2' />
		</button>
	);
};

export const SliderBase: FC<SliderBaseProps> = forwardRef((props, ref) => {
	const { children, settings, className } = props;

	const sliderSettings: Settings = {
		...settings,
		prevArrow: <ArrowPrev />,
		nextArrow: <ArrowNext />,
	};

	return (
		<Slider
			{...sliderSettings}
			ref={ref as RefObject<Slider>}
			className={className}>
			{children}
		</Slider>
	);
});