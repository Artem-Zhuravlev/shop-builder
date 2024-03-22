import React, { FC } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import cls from './InputDatePicker.module.scss';

export const InputDatePicker: FC<ReactDatePickerProps> = (props) => {
	const { selected, onChange, placeholderText, dateFormat } = props;

	return (
		<ReactDatePicker
			selected={selected}
			onChange={onChange}
			className={cls.InputDatePicker}
			popperClassName={cls.Popper}
			placeholderText={placeholderText}
			dateFormat={dateFormat}
		/>
	);
};
