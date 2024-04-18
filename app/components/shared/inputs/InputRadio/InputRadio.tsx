import React, { FC, ReactNode, memo } from 'react';
import { Field } from 'react-final-form';

import cls from './InputRadio.module.scss';
import classNames from 'classnames';

export interface InputRadioProps {
	name: string;
	suffix?: ReactNode;
	value: string | number | ReactNode;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRadio: FC<InputRadioProps> = memo((props) => {
	const { name, suffix, value, onChange } = props;
	const radioClasses = classNames(cls.InputRadio, {
		[cls.withSuffix]: !!suffix,
	});

	const renderInputField = ({ input }: any) => {
		return (
			<input
				{...input}
				className='sr-only'
				onChange={(e) => {
					input.onChange(e);
					if (onChange) {
						onChange(e);
					}
				}}
			/>
		);
	};

	return (
		<label className={radioClasses}>
			<Field
				name={name}
				type='radio'
				value={value}
				component='input'>
				{renderInputField}
			</Field>

			<div className={cls.InputRadioLabel}>
				{value} {suffix && <div className={cls.InputRadioSuffix}>{suffix}</div>}
			</div>
		</label>
	);
});
