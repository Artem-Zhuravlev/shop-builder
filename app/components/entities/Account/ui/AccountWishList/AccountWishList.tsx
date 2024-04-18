import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';
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
	image?: string;
	model: string;
	oldPrice?: number;
	price: number;
	slug: string;
	stock: 'In stock' | 'Out of stock';
	title: string;
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
					oldPrice: item.oldPrice,
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
			render: ({ price, oldPrice }: AccountWishUnitPriceProps) => (
				<AccountWishUnitPrice
					price={price}
					oldPrice={oldPrice}
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
			<h2>{t('title')}</h2>
			<TableBase
				columns={columns}
				data={data}
			/>
		</div>
	);
};
