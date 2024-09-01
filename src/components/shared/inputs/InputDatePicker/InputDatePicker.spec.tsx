import '@testing-library/jest-dom';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { Form } from 'react-final-form';
import { InputDatePicker } from './InputDatePicker';

const mockOnChange = jest.fn();

describe('InputDatePicker Component', () => {
	it('renders the date picker with the given placeholder text', () => {
		const placeholder = 'Select Date';
		const { getByPlaceholderText } = customRender(
			<Form
				onSubmit={() => {}}
				render={({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputDatePicker
							name='test'
							selected={null}
							placeholder={placeholder}
							dateFormat='MM/dd/yyyy'
						/>
					</form>
				)}
			/>,
		);

		expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
	});
});
