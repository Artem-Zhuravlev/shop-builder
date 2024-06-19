import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Form } from 'react-final-form';
import { InputSizes } from './InputSizes';

describe('InputSizes component', () => {
  it('renders correctly with checkboxes', () => {
    const items = ['Small', 'Medium', 'Large'];
    const { getByText } = render(
      <Form onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputSizes type='checkbox' items={items} />
          </form>
        )}
      </Form>,
    );

    items.forEach((item) => {
      const labelElement = getByText(item);
      expect(labelElement).toBeInTheDocument();
    });
  });

  it('renders correctly with radio buttons', () => {
    const items = ['Red', 'Green', 'Blue'];
    const { getByText } = render(
      <Form onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputSizes type='radio' items={items} />
          </form>
        )}
      </Form>,
    );

    items.forEach((item) => {
      const labelElement = getByText(item);
      expect(labelElement).toBeInTheDocument();
    });
  });
});
