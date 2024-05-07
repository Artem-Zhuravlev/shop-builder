import React, { FC, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { TableBase } from '@shared/TableBase';
import {
	CartProductsTableImage,
	CartProductsTableImageProps,
	CartProductsTableProduct,
	CartProductsTableProductProps,
	CartProductsTableQuantity,
	CartProductsTableQuantityProps,
	CartProductsTableAmount,
	CartProductsTableAmountProps,
} from './common';
import { Form } from 'react-final-form';
import { AutoSave, InputNumber } from '@shared/inputs';
import { ButtonBase } from '@shared/ButtonBase';

interface CartProductsTableItem {
	id: string | number;
	image?: string;
	model: string;
	price: number;
	slug: string;
	title: string;
	quantity: number;
}

interface CartProductsTableProps {
	items: CartProductsTableItem[];
}

export const CartProductsTable: FC<CartProductsTableProps> = (props) => {
	const { items } = props;

	const data = useMemo(() => {
		return items.map((item, index) => {
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
				quantity: { quantity: item.quantity, id: item.id },
				unit_price: {
					price: item.price,
				},
				total: {
					price: item.price * item.quantity,
				},
			};
		});
	}, [items]);

	const t = useTranslations('cart');

	const columns = [
		{
			title: t('image'),
			dataIndex: 'image',
			key: 'image',
			render: ({ image, slug, title }: CartProductsTableImageProps) => (
				<CartProductsTableImage
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
			render: ({ slug, title }: CartProductsTableProductProps) => (
				<CartProductsTableProduct
					slug={slug}
					title={title}
				/>
			),
		},
		{ title: t('model'), dataIndex: 'model', key: 'model' },
		{
			title: t('quantity'),
			dataIndex: 'quantity',
			key: 'quantity',
			render: ({ quantity, id }: CartProductsTableQuantityProps) => (
				<CartProductsTableQuantity
					quantity={quantity}
					id={id}
				/>
			),
		},
		{
			title: t('unit_price'),
			dataIndex: 'unit_price',
			key: 'unit_price',
			render: ({ price }: CartProductsTableAmountProps) => (
				<CartProductsTableAmount price={price} />
			),
		},

		{
			title: t('total'),
			dataIndex: 'total',
			key: 'total',
			render: ({ price }: CartProductsTableAmountProps) => (
				<CartProductsTableAmount price={price} />
			),
		},
	];

	return (
		<TableBase
			columns={columns}
			data={data}
		/>
	);
};
