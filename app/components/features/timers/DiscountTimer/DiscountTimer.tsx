import React, { FC } from 'react';
import { TimerBase } from '@shared/TimerBase/TimerBase';
import { useTranslations } from 'next-intl';
import cls from './DiscountTimer.module.scss';
import { ContainerBase } from '@shared/ContainerBase';

interface DiscountTimerProps {
	title: string;
	image: string;
	deadline: string;
	discount: number;
}

export const DiscountTimer: FC<DiscountTimerProps> = (props) => {
	const { title, image, deadline, discount } = props;
	const t = useTranslations();

	return (
		<ContainerBase className={cls.DiscountTimer}>
			<div className={cls.DiscountTimerCol}>
				<h4>{title}</h4>
				<TimerBase deadline={deadline} />
			</div>
			<div className={cls.DiscountTimerCol}>
				<div className={cls.DiscountTimerAdv}>
					{t('base.discount')}
					<div className={cls.DiscountTimerAdvValue}>-{discount} %</div>
				</div>
			</div>
			<div className={cls.DiscountTimerCol}>
				<img
					src={image}
					alt=''
					className={cls.DiscountTimerImage}
				/>
			</div>
		</ContainerBase>
	);
};
