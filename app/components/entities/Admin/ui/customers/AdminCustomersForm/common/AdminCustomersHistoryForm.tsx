'use client';
import { ButtonBase } from '@shared/ButtonBase';
import { InputDatePicker, InputTextarea } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export const AdminCustomersHistoryForm: FC = () => {
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
					<FormLayout title={t('base.history')} onSubmit={handleSubmit}>
						<div className='d-flex gap-1 mb-30'>
							<ButtonBase onClick={() => push('history', undefined)}>
								{t('base.add')}
							</ButtonBase>
							<ButtonBase variant='danger' onClick={() => pop('history')}>
								{t('base.remove')}
							</ButtonBase>
						</div>
						<FieldArray name='history'>
							{({ fields }) =>
								fields.map((name, index) => (
									<div
										key={name}
										style={{
											display: 'grid',
											gridTemplateColumns: '1fr 38px',
											gap: 'var(--space-medium)',
											marginBottom: 'var(--size-small)',
										}}
									>
										<div className='row'>
											<InputDatePicker
												name={`${name}.date_added`}
												placeholder={t('inputs.date_added')}
												required
											/>
											<InputTextarea
												name={`${name}.comment`}
												placeholder={t('inputs.comment')}
											/>
										</div>
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

AdminCustomersHistoryForm.displayName = 'AdminCustomersHistoryForm';
