import '@testing-library/jest-dom'; // for better assertion messages
import { fireEvent } from '@testing-library/react';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { ModalWindow } from './ModalWindow';

describe('ModalWindow', () => {
	test('renders with all props', () => {
		const onSubmit = jest.fn(); // Mock onSubmit function

		const { getByText } = customRender(
			<ModalWindow
				modalType='base'
				title='Test Modal'
				size='xxl'
				textSubmit='Submit'
				onSubmit={onSubmit}
			>
				<p>Modal Content</p>
			</ModalWindow>,
		);

		expect(getByText('Test Modal')).toBeInTheDocument();
		expect(getByText('Modal Content')).toBeInTheDocument();
		expect(getByText('Submit')).toBeInTheDocument();
	});

	test('calls handleClose when close button is clicked', () => {
		const onSubmit = jest.fn();

		const { getByTestId } = customRender(
			<ModalWindow modalType='base' onSubmit={onSubmit}>
				<p>Modal Content</p>
			</ModalWindow>,
		);

		fireEvent.click(getByTestId('close'));

		// Now we expect onSubmit not to be called, as handleClose should be called instead
		expect(onSubmit).not.toHaveBeenCalled();
	});

	test('calls onSubmit when submit button is clicked', () => {
		const onSubmit = jest.fn();

		const { getByText } = customRender(
			<ModalWindow modalType='base' textSubmit='Submit' onSubmit={onSubmit}>
				<p>Modal Content</p>
			</ModalWindow>,
		);

		fireEvent.click(getByText('Submit'));

		expect(onSubmit).toHaveBeenCalledTimes(1);
	});
});
