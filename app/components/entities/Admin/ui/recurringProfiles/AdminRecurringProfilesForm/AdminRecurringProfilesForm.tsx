'use client';
import { LanguageTabs } from '@features/tabs';
import { InputSelect, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';

interface RecurringProfilesForm {
	name: string;
}

interface RecurringProfilesFormData {
	ua: RecurringProfilesForm;
	en: RecurringProfilesForm;
}

export const AdminRecurringProfilesForm: FC = () => {
	const [language, setLanguage] = useState<'en' | 'ua'>('en');
	const t = useTranslations();
	const onSubmit = () => {};
	const periodOptions = [
		{ value: 'day', label: t('inputs.day') },
		{ value: 'week', label: t('inputs.week') },
		{ value: 'semi_month', label: t('inputs.semi_month') },
		{ value: 'month', label: t('inputs.month') },
		{ value: 'year', label: t('inputs.year') },
	];
	const statusOptions = [
		{ value: 'enabled', label: t('inputs.enabled') },
		{ value: 'disabled', label: t('inputs.disabled') },
	];

	const data: RecurringProfilesFormData = {
		ua: {
			name: 'Лоан',
		},
		en: {
			name: 'Loan',
		},
	};

	return (
		<div className='form-holder'>
			<LanguageTabs
				items={['en', 'ua']}
				onSelect={(language) => setLanguage(language as 'en' | 'ua')}
			/>
			<Form onSubmit={onSubmit} initialValues={data[language]}>
				{({ handleSubmit }) => (
					<FormLayout
						className='row align-items-center'
						onSubmit={handleSubmit}
						title={t('admin.recurring_profiles')}
					>
						<InputText name='name' placeholder={t('inputs.name')} required />
						<br />
						<h3 className='h4'>{t('admin.recurring_profile')}</h3>
						<InputText
							name='price'
							className='col-md-4'
							placeholder={t('inputs.price')}
							type='number'
						/>
						<InputText
							name='duration'
							className='col-md-4'
							placeholder={t('inputs.duration')}
							type='number'
						/>
						<InputText
							name='cycle'
							className='col-md-4'
							placeholder={t('inputs.cycle')}
							type='number'
						/>
						<InputSelect
							name='frequency'
							className='col-md-4'
							placeholder={t('inputs.frequency')}
							options={periodOptions}
						/>
						<InputSelect
							name='status'
							className='col-md-4'
							placeholder={t('inputs.status')}
							options={statusOptions}
						/>
						<br />
						<h3 className='h4'>{t('admin.trial_profile')}</h3>
						<InputText
							name='trial_price'
							className='col-md-4'
							placeholder={t('inputs.trial_price')}
							type='number'
						/>
						<InputText
							name='trial_duration'
							className='col-md-4'
							placeholder={t('inputs.trial_duration')}
							type='number'
						/>
						<InputText
							name='trial_cycle'
							className='col-md-4'
							placeholder={t('inputs.trial_cycle')}
							type='number'
						/>
						<InputSelect
							name='trial_frequency'
							className='col-md-4'
							placeholder={t('inputs.trial_frequency')}
							options={periodOptions}
						/>
						<InputSelect
							name='trial_status'
							className='col-md-4'
							placeholder={t('inputs.trial_status')}
							options={statusOptions}
						/>
					</FormLayout>
				)}
			</Form>
		</div>
	);
};
