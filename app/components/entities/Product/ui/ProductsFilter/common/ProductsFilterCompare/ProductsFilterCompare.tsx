import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useSelector } from '@lib/redux';
import Link from 'next/link';

export const ProductsFilterCompare: FC = () => {
	const t = useTranslations('filters');
	const compare = useSelector((state) => state.product.compare);
	return (
		<Link
			href='/compare'
			className='link-primary'>
			{t('product_compare')} ({compare})
		</Link>
	);
};

ProductsFilterCompare.displayName = 'ProductsFilter';
