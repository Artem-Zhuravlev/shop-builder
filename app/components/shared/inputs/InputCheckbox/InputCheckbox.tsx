import React, { FC, ReactNode, useState } from 'react';
import { Field } from 'react-final-form';
import { useTranslations } from 'next-intl';
import { getValidationMessage, TranslateFunction } from '@utils/validations';
import { Label } from '../Label/Label';
import cls from './InputCheckbox.module.scss';

interface InputCheckboxProps {
	id?: string;
	label: ReactNode;
	name: string;
	required?: boolean;
	validationHandler?: (value: string, t: TranslateFunction) => string | void;
	className?: string;
}

export const InputCheckbox: FC<InputCheckboxProps> = (props) => {
	const {
		id,
		label,
		name,
		required = false,
		validationHandler,
		className,
	} = props;
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const t = useTranslations();

	const renderInputField = ({ input, meta }: any) => {
		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		return (
			<label className={cls.InputCheckbox}>
				<input
					{...input}
					id={id}
					type='checkbox'
					name={name}
				/>
				<div className={cls.InputCheckboxLabel}>{label}</div>
			</label>
		);
	};

	return (
		<Label
			hasError={error}
			error={errorMessage}
			className={className}>
			<Field
				name={name}
				validate={(value) =>
					getValidationMessage(value, required, t, validationHandler)
				}>
				{renderInputField}
			</Field>
		</Label>
	);
};
