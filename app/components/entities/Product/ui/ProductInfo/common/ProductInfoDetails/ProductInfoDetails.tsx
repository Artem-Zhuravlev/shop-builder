import React, { FC, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ProductInfoDetailsItem } from './ProductInfoDetailsItem';
import { ProductInfoRow } from '../ProductInfoRow/ProductInfoRow';
import cls from './ProductInfoDetails.module.scss';

export type Availability = 'In stock' | 'Out of stock';
export interface ProductInfoDetailsProps {
	availability?: Availability;
	brand: {
		name: string;
		to: string;
	};
	rewardPoints?: number;
	viewed: number;
}

export const ProductInfoDetails: FC<ProductInfoDetailsProps> = (props) => {
	const { availability, brand, rewardPoints, viewed } = props;
	const t = useTranslations();

	const labelClass = useMemo(() => {
		if (availability && availability === 'In stock') {
			return cls.InStock;
		} else {
			return cls.OutOfStock;
		}
	}, [availability]);

	return (
		<ProductInfoRow>
			<ul className={cls.ProductInfoDetails}>
				<ProductInfoDetailsItem label={t('base.brand')}>
					<Link
						className={cls.ProductInfoDetailsLink}
						href={brand.to}>
						{brand.name}
					</Link>
				</ProductInfoDetailsItem>
				<ProductInfoDetailsItem label={t('base.viewed')}>
					{viewed}
				</ProductInfoDetailsItem>
				{rewardPoints && (
					<ProductInfoDetailsItem label={t('product.reward_points')}>
						{rewardPoints}
					</ProductInfoDetailsItem>
				)}
				{availability && (
					<ProductInfoDetailsItem label={t('base.availability')}>
						<span className={labelClass}>{availability}</span>
					</ProductInfoDetailsItem>
				)}
			</ul>
		</ProductInfoRow>
	);
};

ProductInfoDetails.displayName = 'ProductInfoDetails';
