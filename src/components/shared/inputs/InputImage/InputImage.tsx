'use client';
import { ImagesManager } from '@/components/features/modals';
import { ButtonBase } from '@/components/shared/ButtonBase';
import { IconPicture } from '@/components/shared/icons';
import { getValidationMessage } from '@/utils/validations';
import type { ValidationHandler } from '@/utils/validations/types';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Field } from 'react-final-form';
import { Label } from '../Label/Label';
import cls from './InputImage.module.scss';

export interface InputImageProps {
	name: string;
	required?: boolean;
	validationHandler?: ValidationHandler;
}

interface InputFieldProps {
	input: any;
	meta: any;
	isOpen: boolean;
	setOpen: (value: boolean) => void;
	onSubmit: (input: any, value: any) => void;
}

const InputField: FC<InputFieldProps> = ({
	input,
	meta,
	isOpen,
	setOpen,
	onSubmit,
}) => {
	const hasError = !!meta.error && meta.touched && meta.submitFailed;

	return (
		<div className={cls.InputImage}>
			<button
				type='button'
				className={cls.InputImageBtn}
				onClick={() => setOpen(true)}
			>
				{input.value ? (
					<img src={input.value.url} alt={input.value.alt} />
				) : (
					<IconPicture />
				)}
			</button>

			<div className={cls.InputImageControls}>
				<ButtonBase onClick={() => setOpen(true)}>
					<span className='icon-pencil' />
				</ButtonBase>
				<ButtonBase variant='danger' onClick={() => input.onChange('')}>
					<span className='icon-cross' />
				</ButtonBase>
			</div>

			<ImagesManager
				open={isOpen}
				onClose={(value) => setOpen(value)}
				onSubmit={(value) => onSubmit(input, value)}
			/>

			{hasError && <span className={cls.ErrorMessage}>{meta.error}</span>}
		</div>
	);
};

export const InputImage: FC<InputImageProps> = ({
	name,
	required = false,
	validationHandler,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const t = useTranslations();

	const handleSubmit = (input: any, value: any) => {
		input.onChange(value);
		setIsOpen(false);
	};

	return (
		<Field
			name={name}
			validate={(value) =>
				getValidationMessage(value, required, t, validationHandler)
			}
		>
			{({ input, meta }) => (
				<Label hasError={!!meta.error && meta.touched} error={meta.error}>
					<InputField
						input={input}
						meta={meta}
						isOpen={isOpen}
						setOpen={setIsOpen}
						onSubmit={handleSubmit}
					/>
				</Label>
			)}
		</Field>
	);
};

InputImage.displayName = 'InputImage';
