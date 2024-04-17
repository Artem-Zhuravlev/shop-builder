import React, { FC, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Field } from 'react-final-form';

import cls from './InputRadio.module.scss';
import classNames from 'classnames';

interface InputProps {
	name: string;
	value: string | number;
	suffix?: ReactNode;
}

export const InputRadio: FC<InputProps> = React.memo((props) => {
	const { name, value, suffix } = props;
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
