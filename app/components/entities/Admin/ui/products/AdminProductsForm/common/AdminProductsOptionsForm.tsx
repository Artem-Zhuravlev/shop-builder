'use client';
import { TabsBase, type TabItem } from '@shared/TabsBase';
import { AutoSave, InputSelect, type SelectOption } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import { Form } from 'react-final-form';
import cls from '../AdminProductsForm.module.scss';
import { AdminProductsOptionForm } from './AdminProductsOptionForm';

export const AdminProductsOptionsForm: FC = () => {
	const t = useTranslations();
	const [tabsOptions, setTabsOptions] = useState<TabItem[]>([]);
	const addOptions = ({ options }: { options: SelectOption[] }) => {
		const result = options.map(({ value }) => ({
			label: value,
			description: <AdminProductsOptionForm name={value as string} />,
		}));

		setTabsOptions(result as TabItem[]);
	};

	return (
		<div className={cls.AdminProductsOptionsForm}>
			<Form
				onSubmit={addOptions}
				render={({ handleSubmit }) => (
					<>
						<AutoSave save={handleSubmit} />
						<InputSelect
							name='options'
							isMulti
							options={[
								{ value: 'option1', label: 'Option 1' },
								{ value: 'option2', label: 'Option 2' },
								{ value: 'option3', label: 'Option 3' },
							]}
							placeholder={t('inputs.options')}
						/>
					</>
				)}
			/>
			{tabsOptions && tabsOptions.length > 0 && (
				<TabsBase items={tabsOptions} />
			)}
		</div>
	);
};

AdminProductsOptionsForm.displayName = 'AdminProductsOptionsForm';
