import React, { useState, type FC, useMemo } from 'react';
import { TabsBase, type TabItem } from '@/components/shared/TabsBase';
import { Form } from 'react-final-form';
import { FormLayout } from '@/components/widgets/FormLayout';
import { ErrorAlert } from '@/components/features/alerts';

interface StepFormProps {
	tabs: TabItem[];
	onSubmit: (values: any) => void;
	initialValues: object | null;
}

export const StepForm: FC<StepFormProps> = ({
	tabs,
	onSubmit,
	initialValues,
}) => {
	const [activeTabItem, setActiveTabItem] = useState<TabItem>(tabs[0]);

	const handleTabChange = (tab: TabItem) => {
		setActiveTabItem(tab);
	};

	const handleFormSubmit = (values: any) => {
		onSubmit(values);
	};

	return (
		<div className='form-holder'>
			<Form
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
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
