import React, { type ChangeEvent, type FC, type ReactNode } from 'react';
import cls from './InputCheckbox.module.scss';

interface InputCheckboxAdapterProps {
	input: any;
	className: string;
	disabled: boolean | undefined;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	label?: ReactNode;
	suffix?: ReactNode;
}

export const InputCheckboxAdapter: FC<InputCheckboxAdapterProps> = ({
	input,
	className,
	disabled,
	onChange,
	label,
	suffix,
}) => {
	return (
		<label className={className}>
			<input
				{...input}
				disabled={disabled}
				className='sr-only'
				onChange={(e) => {
					input.onChange(e);
					if (onChange) {
						onChange(e);
					}
				}}
			/>
			<div className={cls.InputCheckboxLabel}>
				{label}
				{suffix}
			</div>
		</label>
	);
};
