import { SectionBase } from '@shared/SectionBase';
import { SliderBase, SliderCard } from '@shared/SliderBase';
import { settings } from '@utils/settings/slider/sliderWithFourColumns';
import type { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ProductCard, type ProductCardProps } from '../ProductCard';
import cls from './ProductsSlider.module.scss';
interface ProductsSliderProps {
  title: string;
  items?: ProductCardProps[];
}

export const ProductsSlider: FC<ProductsSliderProps> = (props) => {
  const { title, items } = props;
  const addToCart = (slug: string) => {};
  const addToFavorite = (slug: string) => {};
  const quickView = (slug: string) => {};
  const productCompare = (slug: string) => {};

  return (
    <SectionBase title={title}>
      {items && (
        <SliderBase settings={settings} className={cls.ProductSlider}>
          {items.map(
            ({ images, slug, title, rating, price, oldPrice, tax }) => (
              <SliderCard key={uuidv4()}>
                <ProductCard
                  images={images}
                  title={title}
                  rating={rating}
                  price={price}
                  oldPrice={oldPrice}
                  tax={tax}
                  slug={slug}
                  addToCart={addToCart}
                  addToFavorite={addToFavorite}
                  quickView={quickView}
                  productCompare={productCompare}
                  className={cls.ProductSliderItem}
                />
              </SliderCard>
            ),
          )}
        </SliderBase>
      )}
    </SectionBase>
  );
};

ProductsSlider.displayName = 'ProductsSlider';
