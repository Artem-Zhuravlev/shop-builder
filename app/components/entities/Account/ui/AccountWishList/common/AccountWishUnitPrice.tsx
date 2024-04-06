import React, { FC } from 'react';
import cls from '../AccountWishList.module.scss';

export interface AccountWishUnitPriceProps {
	price: string;
	old_price?: string;
	currency?: string;
}

export const AccountWishUnitPrice: FC<AccountWishUnitPriceProps> = (props) => {
	const { price, old_price, currency = '₴' } = props;

	return (
		<div className={cls.AccountWishUnitPrice}>
			<b>
				{currency}
				{price}
			</b>
			{old_price && (
				<div className={cls.oldPrice}>
					<s>
						{currency} {old_price}
					</s>
				</div>
			)}
		</div>
	);
};
