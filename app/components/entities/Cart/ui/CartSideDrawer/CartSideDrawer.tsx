import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { SideDrawer } from '@shared/SideDrawer';
import cls from './CartSideDrawer.module.scss';

export const CartSideDrawer: FC = () => {
	const t = useTranslations('cart');

	return (
		<SideDrawer
			visible={true}
			title={t('cart')}
			drawerClose={() => {}}
			controls={
				<div className={cls.CartSideDrawerControls}>
					<Link
						href={'/cart'}
						className={`${cls.CartSideDrawerEditCart} ${cls.CartSideDrawerBtn}`}>
						{t('edit_cart')}
						<span className='icon-arrow-right2' />
					</Link>
					<Link
						href={'/cart'}
						className={`${cls.CartSideDrawerCheckout} ${cls.CartSideDrawerBtn}`}>
						{t('checkout')}
						<span className='icon-arrow-right2' />
					</Link>
				</div>
			}>
			<div>CartSideDrawer</div>
		</SideDrawer>
	);
};
