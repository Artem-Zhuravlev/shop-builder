import React, { FC } from 'react';
import cls from '../ProductCard.module.scss';

interface CardInfoProps {
	oldPrice?: number;
	price: number;
	symbol: string;
	tax?: number;
}

export const CardInfo: FC<CardInfoProps> = (props) => {
	const { oldPrice, price, symbol, tax } = props;

	return (
		<div className={cls.CardInfo}>
			<span className={cls.CardPriceNew}>
				{price} {symbol}
			</span>
			{oldPrice && (
				<s className={cls.CardPriceOld}>
					{oldPrice} {symbol}
				</s>
			)}
			{tax && <span className={cls.CardPriceTax}>{`-${tax}%`}</span>}
		</div>
	);
};
