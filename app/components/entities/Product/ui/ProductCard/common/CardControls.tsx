import React, { FC } from 'react';
import cls from '../ProductCard.module.scss';

interface CardControlsProps {
	handleToCard: () => void;
	handleToFavorite: () => void;
	handleQuickView: () => void;
	handleCompare: () => void;
}

export const CardControls: FC<CardControlsProps> = (props) => {
	const { handleToCard, handleToFavorite, handleQuickView, handleCompare } =
		props;

	return (
		<div className={cls.CardControls}>
			<button
				type='button'
				aria-label='Add to card'
				onClick={handleToCard}
				className={cls.CardControlsBtn}>
				<span className='icon-cart'></span>
			</button>
			<button
				type='button'
				aria-label='Add to wish list'
				onClick={handleToFavorite}
				className={cls.CardControlsBtn}>
				<span className='icon-heart'></span>
			</button>
			<button
				type='button'
				aria-label='Quick view'
				onClick={handleQuickView}
				className={cls.CardControlsBtn}>
				<span className='icon-eye'></span>
			</button>
			<button
				type='button'
				aria-label='Compare this Product'
				onClick={handleCompare}
				className={cls.CardControlsBtn}>
				<span className='icon-loop2'></span>
			</button>
		</div>
	);
};

CardControls.displayName = 'CardControls';
