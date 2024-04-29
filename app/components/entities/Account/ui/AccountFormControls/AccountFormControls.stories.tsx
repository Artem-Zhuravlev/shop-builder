import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { AccountFormControls } from './AccountFormControls';

export default {
	title: 'Entities/Account/AccountFormControls',
	component: AccountFormControls,
} as Meta<typeof AccountFormControls>;

const Template: StoryFn<typeof AccountFormControls> = (args) => {
	return (
		<AccountFormControls
			{...args}
			handlePrev={() => actions('handlePrev')}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {};
