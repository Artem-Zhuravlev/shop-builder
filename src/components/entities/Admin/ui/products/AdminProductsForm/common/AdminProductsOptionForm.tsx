'use client';
import { ButtonBase } from '@/components/shared/ButtonBase';
import { InputSelect, InputText } from '@/components/shared/inputs';
import { FormLayout } from '@/components/widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

interface AdminProductsOptionFormProps {
	name: string;
}

export const AdminProductsOptionForm: FC<AdminProductsOptionFormProps> = ({
	name,
}) => {
	const t = useTranslations();
	const onSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<Form
			onSubmit={onSubmit}
			mutators={{
				...arrayMutators,
			}}
			render={({
				handleSubmit,
				form: {
					mutators: { push, pop },
				},
			}) => {
				return (
					<FormLayout title={name} onSubmit={handleSubmit}>
						<InputSelect
							name='required'
							placeholder={t('inputs.required')}
							options={[
								{ value: 'yes', label: t('inputs.yes') },
								{ value: 'no', label: t('inputs.no') },
							]}
						/>
						<div className='d-flex gap-1 mb-30'>
							<ButtonBase onClick={() => push(name, undefined)}>
								{t('base.add')}
							</ButtonBase>
							<ButtonBase variant='danger' onClick={() => pop(name)}>
								{t('base.remove')}
							</ButtonBase>
						</div>
						<FieldArray name={name}>
							{({ fields }) =>
								fields.map((name, index) => (
									<div
										key={name}
										style={{
											display: 'grid',
											gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 38px',
											gap: 'var(--space-medium)',
										}}
									>
										<InputSelect
											name={`${name}.option_name`}
											options={[]}
											placeholder={t('inputs.option_name')}
										/>
										<InputText
											name={`${name}.quantity`}
											placeholder={t('inputs.quantity')}
										/>
										<InputSelect
											name={`${name}.substract_stock`}
											placeholder={t('inputs.substract_stock')}
											options={[
												{ value: 'yes', label: t('inputs.yes') },
												{ value: 'no', label: t('inputs.no') },
											]}
										/>
										<InputText
											name={`${name}.price`}
											placeholder={t('inputs.price')}
										/>
										<InputText
											name={`${name}.points`}
											placeholder={t('inputs.points')}
										/>
										<InputText
											name={`${name}.weight`}
											placeholder={t('inputs.weight')}
										/>
										<ButtonBase
											onClick={() => fields.remove(index)}
											variant='danger'
										>
											<span className='icon-cross' />
										</ButtonBase>
									</div>
								))
							}
						</FieldArray>
					</FormLayout>
				);
			}}
		/>
	);
};

AdminProductsOptionForm.displayName = 'AdminProductsOptionForm';
