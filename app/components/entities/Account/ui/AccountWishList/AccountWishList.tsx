import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { HeadingBase } from '@shared/HeadingBase';
import { TableBase } from '@shared/TableBase';
import {
	AccountWishListImage,
	AccountWishListImageProps,
} from './common/AccountWishListImage';
import {
	AccountWishUnitPrice,
	AccountWishUnitPriceProps,
} from './common/AccountWishUnitPrice';
import {
	AccountWishListProduct,
	AccountWishListProductProps,
} from './common/AccountWishListProduct';
import {
	AccountWishListActions,
	AccountWishListActionsProps,
} from './common/AccountWishListActions';

import cls from './AccountWishList.module.scss';

interface AccountWishListItem {
	slug: string;
	title: string;
	model: string;
	stock: 'In stock' | 'Out of stock';
	image?: string;
	price: number;
	old_price?: number;
}

interface AccountWishListProps {
	items: AccountWishListItem[];
}

export const AccountWishList: FC<AccountWishListProps> = (props) => {
	const { items } = props;

	const data = useMemo(() => {
		return items.map((item) => {
			return {
				image: {
					slug: item.slug,
					title: item.title,
					image: item.image,
				},
				product_name: {
					title: item.title,
					slug: item.slug,
				},
				model: item.model,
				stock: item.stock,
				unit_price: {
					price: item.price,
					old_price: item.old_price,
				},
				action: {
					slug: item.slug,
				},
			};
		});
	}, [items]);

	const t = useTranslations('account.wish_list');
	const columns = [
		{
			title: t('image'),
			dataIndex: 'image',
			key: 'image',
			render: ({ image, slug, title }: AccountWishListImageProps) => (
				<AccountWishListImage
					image={image}
					slug={slug}
					title={title}
				/>
			),
		},
		{
			title: t('product_name'),
			dataIndex: 'product_name',
			key: 'product_name',
			render: ({ slug, title }: AccountWishListProductProps) => (
				<AccountWishListProduct
					slug={slug}
					title={title}
				/>
			),
		},
		{ title: t('model'), dataIndex: 'model', key: 'model' },
		{ title: t('stock'), dataIndex: 'stock', key: 'stock' },
		{
			title: t('unit_price'),
			dataIndex: 'unit_price',
			key: 'unit_price',
			render: ({ price, old_price }: AccountWishUnitPriceProps) => (
				<AccountWishUnitPrice
					price={price}
					old_price={old_price}
				/>
			),
		},
		{
			title: t('action'),
			dataIndex: 'action',
			key: 'action',
			render: ({ slug }: AccountWishListActionsProps) => (
				<AccountWishListActions
					slug={slug}
					addToCart={addToCart}
					removeFromWishList={removeFromWishList}
				/>
			),
		},
	];

	const addToCart = (slug: string): void => {};
	const removeFromWishList = (slug: string): void => {};

	return (
		<div className={cls.AccountWishList}>
			<HeadingBase level={2}>{t('title')}</HeadingBase>
			<TableBase
				columns={columns}
				data={data}
			/>
		</div>
	);
};
