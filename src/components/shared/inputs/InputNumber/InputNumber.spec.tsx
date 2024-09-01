import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { Form } from 'react-final-form';
import { InputNumber } from './InputNumber';

describe('InputNumber component', () => {
	it('renders without crashing', () => {
		const { getByLabelText } = customRender(
			<Form onSubmit={() => {}}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputNumber name='test' />
					</form>
				)}
			</Form>,
		);
		expect(getByLabelText('Input number field')).toBeInTheDocument();
	});

	it('increments value correctly', () => {
		const { getByText, getByLabelText } = customRender(
			<Form onSubmit={() => {}}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputNumber name='test' />
					</form>
				)}
			</Form>,
		);
		const input = getByLabelText('Input number field') as HTMLInputElement;
		fireEvent.change(input, { target: { value: '5' } });
		fireEvent.click(getByText('+'));
		expect(input.value).toBe('6');
	});

	it('decrements value correctly', () => {
		const { getByText, getByLabelText } = customRender(
			<Form onSubmit={() => {}}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputNumber name='test' />
					</form>
				)}
			</Form>,
		);
		const input = getByLabelText('Input number field') as HTMLInputElement;
		fireEvent.change(input, { target: { value: '5' } });
		fireEvent.click(getByText('-'));
		expect(input.value).toBe('4');
	});

	it('does not allow decrementing below 0', () => {
		const { getByText, getByLabelText } = customRender(
			<Form onSubmit={() => {}}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputNumber name='test' />
					</form>
				)}
			</Form>,
		);
		const input = getByLabelText('Input number field') as HTMLInputElement;
		fireEvent.change(input, { target: { value: '0' } });
		fireEvent.click(getByText('-'));
		expect(input.value).toBe('0');
	});
});
