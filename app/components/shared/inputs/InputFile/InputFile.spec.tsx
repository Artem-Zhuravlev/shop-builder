import { fireEvent, screen } from '@testing-library/react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import { Form } from 'react-final-form';
import { InputFile, InputProps } from './InputFile';

describe('InputFile component with react-final-form', () => {
  const defaultProps: InputProps = {
    name: 'file',
  };

  it('updates file name on file selection', async () => {
    customRender(
      <Form
        onSubmit={() => {}}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <InputFile {...defaultProps} />
          </form>
        )}
      />,
    );

    const file = new File(['dummy content'], 'dummy.txt', {
      type: 'text/plain',
    });
    const button = screen.getByRole('button', { name: /upload a file/i });

    fireEvent.change(screen.getByTestId('file-input'), {
      target: { files: [file] },
    });
    expect(button).toHaveTextContent('Upload a file');
  });
});
