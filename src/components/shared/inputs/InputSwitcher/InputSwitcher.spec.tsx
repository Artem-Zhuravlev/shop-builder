import '@testing-library/jest-dom';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { Form } from 'react-final-form';
import { InputSwitcher } from './InputSwitcher';

describe('InputSwitcher component', () => {
	const mockOnChange = jest.fn();
	const label = 'Check me';
	const name = 'name';

	it('renders with the default value', () => {
		const { getByTestId } = customRender(
			<Form onSubmit={mockOnChange}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputSwitcher label={label} name={name} />
					</form>
				)}
			</Form>,
		);
		const switchElement = getByTestId('input-switcher');
		expect(switchElement).toBeInTheDocument();
		expect(switchElement).not.toBeChecked();
	});
});
