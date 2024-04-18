import React, { FC } from 'react';
import { TimerBase } from '@shared/TimerBase/TimerBase';
import { useTranslations } from 'next-intl';
import cls from './DiscountTimer.module.scss';
import { ContainerBase } from '@shared/ContainerBase';

interface DiscountTimerProps {
	deadline: string;
	discount: number;
	image: string;
	title: string;
}

export const DiscountTimer: FC<DiscountTimerProps> = (props) => {
	const { deadline, discount, image, title } = props;
	const t = useTranslations('base');

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
				<img
					src={image}
					alt=''
					className={cls.DiscountTimerImage}
				/>
			</div>
		</ContainerBase>
	);
};
