import { useSelector } from '@/lib/redux';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { type FC } from 'react';

export const ProductsFilterCompare: FC = () => {
	const t = useTranslations('filters');
	const compare = useSelector((state) => state.product.compare);
	return (
		<Link href='/compare' className='link-primary'>
			{t('product_compare')} ({compare})
		</Link>
	);
};

ProductsFilterCompare.displayName = 'ProductsFilter';
