import React, { FC, useState } from 'react';
import { Field } from 'react-final-form';
import { useTranslations } from 'next-intl';
import { getValidationMessage } from '@utils/validations';
import { ValidationHandler } from '@utils/validations/types';
import { useModal } from '@lib/modalProvider/ModalContext';
import { ImagesManager } from '@features/modals';
import { IconPicture } from '@shared/icons';
import { Label } from '../Label/Label';
import cls from './InputImage.module.scss';
import { ButtonBase } from '@shared/ButtonBase';

export interface InputImageProps {
	name: string;
	required?: boolean;
	validationHandler?: ValidationHandler;
}

export const InputImage: FC<InputImageProps> = (props) => {
	const { name, required = false, validationHandler } = props;
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const { openModal } = useModal();
	const t = useTranslations();

	const renderInputField = ({ input, meta }: any) => {
		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		return (
			<div className={cls.InputImage}>
				<button
					type='button'
					className={cls.InputImageBtn}
					onClick={() => openModal('imagesManager')}>
					{input?.value ? (
						<img
							src={input.value.url}
							alt={input.value.alt}
						/>
					) : (
						<IconPicture />
					)}
				</button>

				<div className={cls.InputImageControls}>
					<ButtonBase
						variant='info'
						onClick={() => openModal('imagesManager')}>
						<span className='icon-pencil' />
					</ButtonBase>
					<ButtonBase
						variant='danger'
						onClick={() => input.onChange('')}>
						<span className='icon-cross' />
					</ButtonBase>
				</div>
				<ImagesManager onSubmit={(e) => input.onChange(e)} />
			</div>
		);
	};

	return (
		<Label
			hasError={error}
			error={errorMessage}>
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

InputImage.displayName = 'InputImage';
