import React, { FC } from 'react';
import { Rating, RatingProps } from 'react-simple-star-rating';

export const InputRating:FC<RatingProps> = (props) => {
  const { 
    onClick,
    onPointerMove,
    onPointerEnter,
    onPointerLeave,
    initialValue,
    allowFraction,
    allowHover,
    disableFillHover,
    transition,
    size,
    readonly
  } = props; 

  return (
    <Rating
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
      fillColor='var(--color-info)'
      emptyColor='var(--color-faded)'
    />
  )
}