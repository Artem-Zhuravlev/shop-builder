import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from '@lib/redux';
import { IconPicture } from '@shared/icons';
import cls from './CartSideDrawerItem.module.scss';

interface CartSideDrawerItemProps {
	id: string | number;
	image?: string;
	model: string;
	price: number;
	slug: string;
	title: string;
	quantity: number;
	currency?: string;
}

export const CartSideDrawerItem: FC<CartSideDrawerItemProps> = (props) => {
	const { id, image, model, price, slug, title, quantity, currency } = props;
	const t = useTranslations('cart');
	const defaultCurrency = useSelector((state) => state.product.currency);

	return (
		<div className={cls.CartSideDrawerItem}>
			<Link
				href={`/${slug}`}
				className={cls.CartSideDrawerItemImage}>
				{image ? (
					<Image
						src={image}
						alt={title}
						width={55}
						height={55}
					/>
				) : (
					<IconPicture />
				)}
			</Link>
			<div className={cls.CartSideDrawerItemInfo}>
				<Link
					href={`/${slug}`}
					className='link-primary'>
					{title}
				</Link>
				<div className={cls.CartSideDrawerItemModel}>{model}</div>
			</div>
			<div className={cls.CartSideDrawerItemAmount}>x{quantity}</div>
			<div className={cls.CartSideDrawerItemPrice}>
				<span>{currency || defaultCurrency}</span>
				<span>{price}</span>
			</div>
		</div>
	);
};

CartSideDrawerItem.displayName = 'CartSideDrawerItem';
