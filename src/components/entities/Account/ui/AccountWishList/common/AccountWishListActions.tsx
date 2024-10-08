import { TooltipBase } from '@/components/shared/TooltipBase/TooltipBase';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import cls from '../AccountWishList.module.scss';

interface AccountWishListActionsProps {
	slug: string;
	addToCart: (slug: string) => void;
	removeFromWishList: (slug: string) => void;
}

export const AccountWishListActions: FC<AccountWishListActionsProps> = (
	props,
) => {
	const { slug, addToCart, removeFromWishList } = props;
	const t = useTranslations('');

	return (
		<div className={cls.AccountWishListActions}>
			<TooltipBase content={t('product.add_to_cart')}>
				<button
					type='button'
					onClick={() => addToCart(slug)}
					className={cls.AccountWishListBtn}
				>
					<span className='icon-cart' />
				</button>
			</TooltipBase>

			<TooltipBase content={t('base.remove')}>
				<button
					type='button'
					onClick={() => removeFromWishList(slug)}
					className={`${cls.AccountWishListBtn} ${cls.AccountWishListBtnDelete}`}
				>
					<span className='icon-cross' />
				</button>
			</TooltipBase>
		</div>
	);
};
