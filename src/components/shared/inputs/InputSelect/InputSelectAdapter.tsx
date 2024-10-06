'use client';
import React, { type FC, type ComponentProps } from 'react';
import Select from 'react-select';
import cls from './InputSelect.module.scss';

interface InputSelectAdapterProps {
	input: any;
	meta: any;
	label: string | undefined;
	rest?: Omit<ComponentProps<typeof Select>, 'onChange' | 'value'>;
}

export const InputSelectAdapter: FC<InputSelectAdapterProps> = ({
	input,
	meta,
	label,
	...rest
}) => {
	const hasError = !!meta.error && meta.touched;

	const select = (
		<Select
			{...input}
			{...rest}
			className={hasError ? cls.InputSelectError : ''}
		/>
	);

	return label ? (
		<label className={cls.InputSelectLabel}>
			{label}
			<div className={cls.InputSelectContainer}>{select}</div>
			{hasError && <span className={cls.ErrorMessage}>{meta.error}</span>}
		</label>
	) : (
		select
	);
};
