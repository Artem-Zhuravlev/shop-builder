import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { ProductInfoRow } from '../ProductInfoRow/ProductInfoRow';
import cls from './ProductInfoBenefits.module.scss';

export const ProductInfoBenefits: FC = () => {
	const t = useTranslations('product');

	return (
		<ProductInfoRow>
			<ul className={cls.ProductInfoBenefits}>
				<li className={cls.ProductInfoBenefitsItem}>
					<span className='icon-credit-card' />
					{t('online_payment')}
				</li>
				<li className={cls.ProductInfoBenefitsItem}>
					<span className='icon-coin-dollar' />
					{t('easy_return')}
				</li>
				<li className={cls.ProductInfoBenefitsItem}>
					<span className='icon-bubbles4' />
					{t('all_day_service')}
				</li>
			</ul>
		</ProductInfoRow>
	);
};

ProductInfoBenefits.displayName = 'ProductInfoBenefits';
