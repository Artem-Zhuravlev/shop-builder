import React, { FC, ChangeEvent } from 'react';
import cls from './InputCheckbox.module.scss';

interface InputProps {
	id: string;
	label: string;
	value: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputCheckbox: FC<InputProps> = (props) => {
	const { id, label, value, onChange } = props;

	return (
		<label className={cls.InputCheckbox}>
			<input
				id={id}
				type='checkbox'
				checked={value}
				onChange={onChange}
			/>
			<div className={cls.InputCheckboxLabel}>{label}</div>
		</label>
	);
};
