import React, { FC } from 'react';
import cls from '../AccountWishList.module.scss';

export interface AccountWishUnitPriceProps {
	price: string;
	oldPrice?: string;
	currency?: string;
}

export const AccountWishUnitPrice: FC<AccountWishUnitPriceProps> = (props) => {
	const { price, oldPrice, currency = '₴' } = props;

	return (
		<div className={cls.AccountWishUnitPrice}>
			<b>
				{currency}
				{price}
			</b>
			{oldPrice && (
				<div className={cls.oldPrice}>
					<s>
						{currency} {oldPrice}
					</s>
				</div>
			)}
		</div>
	);
};
