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
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value?: boolean;
	checked?: boolean;
	suffix?: ReactNode;
}

export const InputCheckbox: FC<InputCheckboxProps> = (props) => {
	const {
		label,
		name,
		required = false,
		validationHandler,
		className,
		suffix,
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
					className='sr-only'
				/>
				<div className={cls.InputCheckboxLabel}>
					{label}
					{suffix && <div className={cls.InputCheckboxSuffix}>{suffix}</div>}
				</div>
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
				type='checkbox'
				validate={(value) => {
					if (value) {
						getValidationMessage(value, required, t, validationHandler);
					}
				}}>
				{renderInputField}
			</Field>
		</Label>
	);
};
