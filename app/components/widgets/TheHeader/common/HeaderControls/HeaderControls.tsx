import React, { FC } from 'react';
import cls from './HeaderControls.module.scss';
import { useTranslations } from 'next-intl';

interface HeaderControlsProps {
	cartTotal?: number;
	handleAddToCart: () => void;
	handleCompare: () => void;
	handleWishlist: () => void;
}

export const HeaderControls: FC<HeaderControlsProps> = (props) => {
	const {
		cartTotal = 0,
		handleAddToCart,
		handleCompare,
		handleWishlist,
	} = props;

	const t = useTranslations('base');

	return (
		<div className={cls.HeaderControls}>
			<button
				type='button'
				aria-label={t('compare')}
				className={cls.HeaderControlsBtn}
				onClick={() => handleCompare()}>
				<span className='icon-loop2' />
			</button>
			<button
				type='button'
				aria-label={t('wishlist')}
				className={cls.HeaderControlsBtn}
				onClick={() => handleWishlist()}>
				<span className='icon-heart' />
			</button>
			<button
				type='button'
				aria-label={t('cart_total')}
				className={cls.HeaderControlsBtn}
				onClick={() => handleAddToCart()}>
				<span className={cls.CartItemTotal}>{cartTotal}</span>
				<span className='icon-cart' />
			</button>
		</div>
	);
};
