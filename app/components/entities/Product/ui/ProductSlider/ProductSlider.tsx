'use client';
import React, { useState, useEffect, useRef, FC, useId } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import { SliderBase } from '@shared/SliderBase';
import cls from './ProductSlider.module.scss';

interface ProductSliderProps {
	items: Array<{ image: string; value: string }>;
}

export const ProductSlider: FC<ProductSliderProps> = ({ items }) => {
	const [mainNav, setMainNav] = useState<Slider | null>(null);
	const [subNav, setSubNav] = useState<Slider | null>(null);
	const id = useId();

	const mainSliderRef = useRef<Slider>(null);
	const thumbsSliderRef = useRef<Slider>(null);

	const mainSliderSettings: Settings = {
		asNavFor: subNav || undefined,
		arrows: false,
	};

	const thumbSliderSettings: Settings = {
		asNavFor: mainNav || undefined,
		slidesToShow: 3,
		arrows: false,
		swipeToSlide: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	useEffect(() => {
		if (mainSliderRef.current && thumbsSliderRef.current) {
			setMainNav(mainSliderRef.current);
			setSubNav(thumbsSliderRef.current);
		}
	}, []);

	return (
		<div className={cls.ProductSlider}>
			<SliderBase
				settings={mainSliderSettings}
				ref={mainSliderRef}>
				{items &&
					items.map((item, index) => (
						<div className={cls.ProductSliderCard}>
							<Image
								key={`${id}-${index}`}
								src={item.image}
								alt={item.value}
								width={450}
								height={590}
							/>
						</div>
					))}
			</SliderBase>
			<SliderBase
				settings={thumbSliderSettings}
				ref={thumbsSliderRef}
				className={cls.ProductSliderPreviews}>
				{items &&
					items.map((item, index) => (
						<div className={cls.ProductSliderThumb}>
							<Image
								key={`${id}-${index}-thumb`}
								src={item.image}
								alt={item.value}
								width={140}
								height={130}
							/>
						</div>
					))}
			</SliderBase>
		</div>
	);
};
