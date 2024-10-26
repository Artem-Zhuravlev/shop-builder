import type { Meta, StoryFn } from '@storybook/react';
import { ConfirmModal } from './ConfirmModal';
import { useConfirmModal } from '@/lib/modalProvider/ModalContext';

export default {
	title: 'Features/Modals/ConfirmModal',
	component: ConfirmModal,
} as Meta<typeof ConfirmModal>;

const Template: StoryFn<typeof ConfirmModal> = (args) => {
	const { openModal } = useConfirmModal();

	return (
		<>
			<button type='button' onClick={openModal}>
				Open Modal
			</button>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {};
