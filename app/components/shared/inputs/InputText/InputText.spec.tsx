import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Form } from 'react-final-form';
import { InputText } from './InputText';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: any) => key,
}));

describe('InputText component', () => {
  it('renders input field with given props', () => {
    const { getByPlaceholderText } = render(
      <Form onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputText
              name='test'
              placeholder='Your Placeholder'
              isDarkMode={true}
              rounded={true}
            />
          </form>
        )}
      </Form>,
    );
    const inputElement = getByPlaceholderText('Your Placeholder');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', 'test');
    expect(inputElement).toHaveClass('InputText');
    expect(inputElement).toHaveClass('InputTextDark');
    expect(inputElement).toHaveClass('rounded');
  });
});
