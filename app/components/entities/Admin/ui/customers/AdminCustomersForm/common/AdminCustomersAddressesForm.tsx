'use client';
import { ButtonBase } from '@shared/ButtonBase';
import { InputCountry, InputSelect, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export const AdminCustomersAddressesForm: FC = () => {
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
					<FormLayout title={t('base.addresses')} onSubmit={handleSubmit}>
						<div className='d-flex gap-1 mb-30'>
							<ButtonBase onClick={() => push('addresses', undefined)}>
								{t('base.add')}
							</ButtonBase>
							<ButtonBase variant='danger' onClick={() => pop('addresses')}>
								{t('base.remove')}
							</ButtonBase>
						</div>
						<FieldArray name='addresses'>
							{({ fields }) =>
								fields.map((name, index) => (
									<div
										key={name}
										style={{
											display: 'grid',
											gridTemplateColumns: '1fr 38px',
											gap: 'var(--space-medium)',
										}}
									>
										<div className='row'>
											<InputText
												className='col-md-4'
												name={`${name}.first_name`}
												placeholder={t('inputs.first_name')}
												required
											/>
											<InputText
												className='col-md-4'
												name={`${name}.last_name`}
												placeholder={t('inputs.last_name')}
												required
											/>
											<InputText
												className='col-md-4'
												name={`${name}.company`}
												placeholder={t('inputs.company')}
											/>
											<InputText
												className='col-md-4'
												name={`${name}.address`}
												placeholder={t('inputs.address')}
												required
											/>
											<InputText
												className='col-md-4'
												name={`${name}.city`}
												placeholder={t('inputs.city')}
												required
											/>
											<InputText
												className='col-md-4'
												name={`${name}.postcode`}
												placeholder={t('inputs.postcode')}
											/>
											<InputCountry
												className='col-md-4'
												name={`${name}.country`}
											/>
											<InputSelect
												className='col-md-4'
												name={`${name}.region`}
												placeholder={t('inputs.region')}
												options={[]}
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

AdminCustomersAddressesForm.displayName = 'AdminCustomersAddressesForm';
