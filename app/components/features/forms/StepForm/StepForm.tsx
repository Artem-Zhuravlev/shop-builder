import React, { useState, type FC, useMemo } from 'react';
import { TabsBase, type TabItem } from '@shared/TabsBase';
import { Form } from 'react-final-form';
import { FormLayout } from '@widgets/FormLayout';
import { ErrorAlert } from '@features/alerts';

interface StepFormProps {
	tabs: TabItem[];
	onSubmit: (values: any) => void;
}

export const StepForm: FC<StepFormProps> = ({ tabs, onSubmit }) => {
	const [activeTabItem, setActiveTabItem] = useState<TabItem>(tabs[0]);

	const handleTabChange = (tab: TabItem) => {
		setActiveTabItem(tab);
	};

	const handleFormSubmit = (values: any) => {
		console.log('Form Submitted:', values);
		onSubmit(values);
	};

	return (
		<div className='form-holder'>
			<Form
				onSubmit={handleFormSubmit}
				render={({ handleSubmit, submitFailed }) => (
					<FormLayout onSubmit={handleSubmit} title={activeTabItem.label}>
						<TabsBase
							items={tabs}
							className='mb-30'
							handleActiveTab={handleTabChange}
							useCssVisibility
						/>
						<ErrorAlert submitFailed={submitFailed} />
					</FormLayout>
				)}
			/>
		</div>
	);
};

StepForm.displayName = 'StepForm';
