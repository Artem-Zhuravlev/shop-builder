import { ContainerBase } from '@shared/ContainerBase';
import { TimerBase } from '@shared/TimerBase/TimerBase';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { type FC } from 'react';
import cls from './DiscountTimer.module.scss';

interface DiscountTimerProps {
	deadline: string;
	discount: number;
	image: string;
	title: string;
}

export const DiscountTimer: FC<DiscountTimerProps> = (props) => {
	const { deadline, discount, image, title } = props;
	const t = useTranslations('product');

	return (
		<ContainerBase className={cls.DiscountTimer}>
			<div className={cls.DiscountTimerCol}>
				<h4>{title}</h4>
				<TimerBase deadline={deadline} />
			</div>
			<div className={cls.DiscountTimerCol}>
				<div className={cls.DiscountTimerAdv}>
					{t('discount')}
					<div className={cls.DiscountTimerAdvValue}>-{discount} %</div>
				</div>
			</div>
			<div className={cls.DiscountTimerCol}>
				<Image src={image} alt='' className={cls.DiscountTimerImage} />
			</div>
		</ContainerBase>
	);
};

DiscountTimer.displayName = 'DiscountTimer';
