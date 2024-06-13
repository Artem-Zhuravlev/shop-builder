import React, { FC } from 'react';
import { Rating, RatingProps } from 'react-simple-star-rating';

export const InputRating: FC<RatingProps> = (props) => {
	const {
		className,
		initialValue,
		allowFraction,
		allowHover,
		disableFillHover,
		transition,
		size,
		readonly,
		onClick,
		onPointerEnter,
		onPointerLeave,
		onPointerMove,
	} = props;

	return (
		<Rating
			className={className}
			onClick={onClick}
			onPointerMove={onPointerMove}
			onPointerEnter={onPointerEnter}
			onPointerLeave={onPointerLeave}
			initialValue={initialValue}
			allowFraction={allowFraction}
			allowHover={allowHover}
			disableFillHover={disableFillHover}
			transition={transition}
			size={size}
			readonly={readonly}
			fillColor='var(--warning-main)'
			emptyColor='var(--gray-40)'
		/>
	);
};

InputRating.displayName = 'InputRating';
