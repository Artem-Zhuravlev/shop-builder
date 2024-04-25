import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TooltipBase } from '@shared/TooltipBase/TooltipBase';
import cls from '../AccountWishList.module.scss';

export interface AccountWishListActionsProps {
	slug: string;
	addToCart: (slug: string) => void;
	removeFromWishList: (slug: string) => void;
}

export const AccountWishListActions: FC<AccountWishListActionsProps> = (
	props
) => {
	const { slug, addToCart, removeFromWishList } = props;
	const t = useTranslations('');

	return (
		<div className={cls.AccountWishListActions}>
			<TooltipBase content={t('product.add_to_cart')}>
				<button
					type='button'
					onClick={() => addToCart(slug)}
					className={cls.AccountWishListBtn}>
					<span className='icon-cart' />
				</button>
			</TooltipBase>

			<TooltipBase content={t('base.remove')}>
				<button
					type='button'
					onClick={() => removeFromWishList(slug)}
					className={`${cls.AccountWishListBtn} ${cls.AccountWishListBtnDelete}`}>
					<span className='icon-cross' />
				</button>
			</TooltipBase>
		</div>
	);
};
