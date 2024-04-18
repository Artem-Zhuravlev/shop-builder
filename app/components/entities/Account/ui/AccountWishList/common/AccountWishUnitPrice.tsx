import React, { FC } from 'react';
import { useSelector } from '@lib/redux';
import cls from '../AccountWishList.module.scss';

export interface AccountWishUnitPriceProps {
	price: string;
	oldPrice?: string;
	currency?: string;
}

export const AccountWishUnitPrice: FC<AccountWishUnitPriceProps> = (props) => {
	const { price, oldPrice, currency } = props;
	const defaultCurrency = useSelector((state) => state.product.currency);

	return (
		<div className={cls.AccountWishUnitPrice}>
			<b>
				{currency}
				{price}
			</b>
			{oldPrice && (
				<div className={cls.oldPrice}>
					<s>
						{currency || defaultCurrency} {oldPrice}
					</s>
				</div>
			)}
		</div>
	);
};
