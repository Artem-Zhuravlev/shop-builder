import React, { FC, ReactNode, memo } from 'react';
import { Field } from 'react-final-form';

import cls from './InputRadio.module.scss';
import classNames from 'classnames';

interface InputProps {
	name: string;
	suffix?: ReactNode;
	value: string | number | ReactNode;
}

export const InputRadio: FC<InputProps> = memo((props) => {
	const { name, suffix, value } = props;
	const radioClasses = classNames(cls.InputRadio, {
		[cls.withSuffix]: !!suffix,
	});

	return (
		<label className={radioClasses}>
			<Field
				name={name}
				type='radio'
				value={value}
				className='sr-only'
				component='input'
			/>

			<div className={cls.InputRadioLabel}>
				{value} {suffix && <div className={cls.InputRadioSuffix}>{suffix}</div>}
			</div>
		</label>
	);
});
