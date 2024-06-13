import React, { FC } from 'react';
import { useSelector } from '@lib/redux';
import cls from '../ProductCard.module.scss';

interface CardInfoProps {
	oldPrice?: number;
	price: number;
	currency: string;
	tax?: number;
}

export const CardInfo: FC<CardInfoProps> = (props) => {
	const { oldPrice, price, currency, tax } = props;
	const defaultCurrency = useSelector((state) => state.product.currency);

	return (
		<div className={cls.CardInfo}>
			<span className={cls.CardPriceNew}>
				{price} {currency || defaultCurrency}
			</span>
			{oldPrice && (
				<s className={cls.CardPriceOld}>
					{oldPrice} {currency || defaultCurrency}
				</s>
			)}
			{tax && <span className={cls.CardPriceTax}>{`-${tax}%`}</span>}
		</div>
	);
};

CardInfo.displayName = 'CardInfo';
