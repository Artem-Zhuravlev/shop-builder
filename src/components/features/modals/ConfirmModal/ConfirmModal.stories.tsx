import type { Meta, StoryFn } from '@storybook/react';
import { ConfirmModal } from './ConfirmModal';

export default {
	title: 'Features/Modals/ConfirmModal',
	component: ConfirmModal,
} as Meta<typeof ConfirmModal>;

const Template: StoryFn<typeof ConfirmModal> = (args) => {
	return <ConfirmModal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	title: 'Main image',
};
