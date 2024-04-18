'use client';
import React, { FC, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import cls from './TimerBase.module.scss';
import classNames from 'classnames';

interface TimerBaseProps {
	deadline: string;
	secondary?: boolean;
	small?: boolean;
}

export const TimerBase: FC<TimerBaseProps> = (props) => {
	const { deadline, secondary, small } = props;
	const t = useTranslations('base');
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const getTime = (deadline: string) => {
		const time = Date.parse(deadline) - Date.now();

		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};

	useEffect(() => {
		const interval = setInterval(() => getTime(deadline), 1000);
		return () => clearInterval(interval);
	}, []);

	const timerBaseClasses = classNames(cls.TimerBase, {
		[cls.TimerBaseSecondary]: secondary,
		[cls.TimerBaseSmall]: small,
	});

	return (
		<div className={timerBaseClasses}>
			<div className={cls.TimerBaseCol}>
				<div className={cls.TimerBaseValue}>
					{days < 10 ? 0 : null}
					{days}
				</div>
				<div className={cls.TimerBaseCaption}>{t('days')}</div>
			</div>
			<div className={cls.TimerBaseCol}>
				<div className={cls.TimerBaseValue}>
					{hours < 10 ? 0 : null}
					{hours}
				</div>
				<div className={cls.TimerBaseCaption}>{t('hours')}</div>
			</div>
			<div className={cls.TimerBaseCol}>
				<div className={cls.TimerBaseValue}>
					{minutes < 10 ? 0 : null}
					{minutes}
				</div>
				<div className={cls.TimerBaseCaption}>{t('minutes')}</div>
			</div>
			<div className={cls.TimerBaseCol}>
				<div className={cls.TimerBaseValue}>
					{seconds < 10 ? 0 : null}
					{seconds}
				</div>
				<div className={cls.TimerBaseCaption}>{t('seconds')}</div>
			</div>
		</div>
	);
};
