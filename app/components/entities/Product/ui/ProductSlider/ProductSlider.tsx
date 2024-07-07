'use client';
import { SliderBase } from '@shared/SliderBase';
import Image from 'next/image';
import { useEffect, useRef, useState, type FC } from 'react';
import type Slider from 'react-slick';
import type { Settings } from 'react-slick';
import { v4 as uuidv4 } from 'uuid';
import cls from './ProductSlider.module.scss';

interface ProductSliderProps {
  items: { image: string; alt: string }[];
}

export const ProductSlider: FC<ProductSliderProps> = ({ items }) => {
  const [mainNav, setMainNav] = useState<Slider | null>(null);
  const [subNav, setSubNav] = useState<Slider | null>(null);

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
      <SliderBase settings={mainSliderSettings} ref={mainSliderRef}>
        {items?.map((item) => (
          <div className={cls.ProductSliderCard} key={uuidv4()}>
            <Image src={item.image} alt={item.alt} width={450} height={590} />
          </div>
        ))}
      </SliderBase>
      <SliderBase
        settings={thumbSliderSettings}
        ref={thumbsSliderRef}
        className={cls.ProductSliderPreviews}>
        {items?.map((item) => (
          <div className={cls.ProductSliderThumb} key={uuidv4()}>
            <Image src={item.image} alt={item.alt} width={140} height={130} />
          </div>
        ))}
      </SliderBase>
    </div>
  );
};

ProductSlider.displayName = 'ProductSlider';
