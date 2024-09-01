import React, { memo, type FC, type ReactNode } from 'react';
import cls from './SliderBase.module.scss';

interface SliderCardProps {
	children: ReactNode;
}

export const SliderCard: FC<SliderCardProps> = memo(({ children }) => {
	return <div className={cls.SliderCard}>{children}</div>;
});

SliderCard.displayName = 'SliderCard';
