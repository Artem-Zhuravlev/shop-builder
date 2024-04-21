'use client';
import React, { FC, useState, InputHTMLAttributes } from 'react';
import { useTranslations } from 'next-intl';
import cls from './InputNumber.module.scss';
import { ButtonBase } from '@shared/ButtonBase';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: number;
	onNumberChange: (value: number) => void;
}

export const InputNumber: FC<InputProps> = (props) => {
	const { value = 0, onNumberChange } = props;
	const [numberValue, setNumberValue] = useState<number>(value);
	const t = useTranslations();

	const handleDecrement = () => {
		if (numberValue > 0) {
			const updatedValue = numberValue - 1;
			setNumberValue(updatedValue);
			onNumberChange(updatedValue);
		}
	};

	const handleIncrement = () => {
		const updatedValue = numberValue + 1;
		setNumberValue(updatedValue);
		onNumberChange(updatedValue);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseInt(e.target.value, 10) || 0;
		setNumberValue(newValue);
		onNumberChange(newValue);
	};

	return (
		<div className={cls.InputNumber}>
			<ButtonBase
				onClick={handleDecrement}
				aria-label={t('base.decrement')}>
				-
			</ButtonBase>
			<input
				type='number'
				value={numberValue.toString()}
				onChange={handleChange}
				aria-label={t('inputs.number_label')}
			/>
			<ButtonBase
				onClick={handleIncrement}
				aria-label={t('base.increment')}>
				+
			</ButtonBase>
		</div>
	);
};
