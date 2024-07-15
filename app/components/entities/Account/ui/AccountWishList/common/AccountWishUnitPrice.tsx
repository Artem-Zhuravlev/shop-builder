import { useSelector } from '@lib/redux';
import React, { type FC } from 'react';
import cls from '../AccountWishList.module.scss';

interface AccountWishUnitPriceProps {
	price: number;
	oldPrice?: number;
	currency?: string;
}

export const AccountWishUnitPrice: FC<AccountWishUnitPriceProps> = (props) => {
	const { price, oldPrice, currency } = props;
	const defaultCurrency = useSelector((state) => state.product.currency);

	return (
		<div className={cls.AccountWishUnitPrice}>
			<b>
				{currency || defaultCurrency}
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
