import React, { FC } from 'react';

interface DiscountTimerProps {
  title: string;
  image: string;
  date: string;
  discount: number;
}

export const DiscountTimer: FC<DiscountTimerProps> = (props) => {
  return (
    <div>Discount timer</div>
  )
}
