import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { ButtonBase } from './ButtonBase';

describe('ButtonBase Component', () => {
  it('renders a button with provided text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<ButtonBase>{buttonText}</ButtonBase>);
    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('calls onClick handler when the button is clicked', () => {
    const onClickMock = jest.fn();
    const buttonText = 'Click me';
    const { getByText } = render(
      <ButtonBase onClick={onClickMock}>{buttonText}</ButtonBase>,
    );
    const button = getByText(buttonText);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders a disabled button', () => {
    const buttonText = 'Click me';
    const { getByText } = render(
      <ButtonBase disabled>{buttonText}</ButtonBase>,
    );
    const button = getByText(buttonText) as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  it('renders a large secondary button with loading spinner', () => {
    const buttonText = 'Click me';
    const { getByText, container } = render(
      <ButtonBase large variant='secondary' isLoading>
        {buttonText}
      </ButtonBase>,
    );

    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();

    const spinnerIcon = container.querySelector('.icon-spinner2');
    expect(spinnerIcon).toBeInTheDocument();

    expect(button).toHaveClass('ButtonBase');
    expect(button).toHaveClass('large');
    expect(button).toHaveClass('secondary');
    expect(button).toHaveClass('loading');
  });
});
