import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputSwitcher } from './InputSwitcher';

describe('InputSwitcher component', () => {
  it('renders with the default value', () => {
    const { getByTestId } = render(<InputSwitcher value={false} onSwitch={() => {}} />);
    const switchElement = getByTestId('input-switcher');
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).not.toBeChecked();
  });

  it('triggers the callback function when switched', () => {
    const onSwitchMock = jest.fn();
    const { getByTestId } = render(<InputSwitcher value={true} onSwitch={onSwitchMock} />);
    const switchElement = getByTestId('input-switcher');

    fireEvent.click(switchElement);

    expect(onSwitchMock).toHaveBeenCalledTimes(1);
    expect(onSwitchMock).toHaveBeenCalledWith(false);
  });

  it('toggles the switcher value on user interaction', () => {
    const { getByRole } = render(<InputSwitcher value={false} onSwitch={() => {}} />);
    const switchElement = getByRole('checkbox');
  
    fireEvent.click(switchElement);
  
    expect(switchElement).toBeChecked();
  });
});
