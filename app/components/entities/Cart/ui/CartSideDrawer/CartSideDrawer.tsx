import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { SideDrawer } from '@shared/SideDrawer';
import { CartSideDrawerItem } from './common/CartSideDrawerItem/CartSideDrawerItem';
import cls from './CartSideDrawer.module.scss';

export const CartSideDrawer: FC = () => {
	const t = useTranslations('cart');

	const [products, setProducts] = useState([
		{
			id: 1,
			slug: 'slug',
			title: 'Product card',
			image: 'https://placehold.co/55x55/000000/FFE400/jpg',
			model: 'Product 19',
			price: 100,
			quantity: 3,
		},
		{
			id: 2,
			slug: 'slug',
			title: 'Product card',
			image: 'https://placehold.co/55x55/000000/FFE400/jpg',
			model: 'Product 19',
			price: 100,
			quantity: 1,
		},
	]);

	return (
		<SideDrawer
			visible={true}
			title={t('cart')}
			drawerClose={() => {}}
			controls={
				<div className={cls.CartSideDrawerControls}>
					<Link
						href='/cart'
						className={`${cls.CartSideDrawerEditCart} ${cls.CartSideDrawerBtn}`}>
						{t('edit_cart')}
						<span className='icon-arrow-right2' />
					</Link>
					<Link
						href='/checkout'
						className={`${cls.CartSideDrawerCheckout} ${cls.CartSideDrawerBtn}`}>
						{t('checkout')}
						<span className='icon-arrow-right2' />
					</Link>
				</div>
			}>
			{products && products.length ? (
				products.map((product) => (
					<CartSideDrawerItem
						key={product.id}
						{...product}
					/>
				))
			) : (
				<div className={cls.CartEmpty}>{t('cart_is_empty')}</div>
			)}
		</SideDrawer>
	);
};

CartSideDrawer.displayName = 'CartSideDrawer';
