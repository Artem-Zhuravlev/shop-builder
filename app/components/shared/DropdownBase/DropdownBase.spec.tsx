import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { DropdownBase } from './DropdownBase';

describe('DropdownBase Component', () => {
  const mockList = [
    { route: '/home', value: 'Home' },
    { route: '/about', value: 'About' },
    { route: '/contact', value: 'Contact' },
  ];

  it('renders the dropdown button', () => {
    const buttonText = 'Dropdown';
    const { getByText } = render(
      <DropdownBase list={mockList}>{buttonText}</DropdownBase>,
    );
    const dropdownButton = getByText(buttonText);
    expect(dropdownButton).toBeInTheDocument();
  });

  it('toggles the dropdown list on button click', () => {
    const buttonText = 'Dropdown';
    const { getByText, queryByText } = render(
      <DropdownBase list={mockList}>{buttonText}</DropdownBase>,
    );

    const dropdownButton = getByText(buttonText);
    expect(queryByText('Home')).toBeNull();

    fireEvent.click(dropdownButton);

    for (const item of mockList) {
      const link = queryByText(item.value);
      expect(link).toBeInTheDocument();
    }

    fireEvent.click(dropdownButton);

    for (const item of mockList) {
      const link = queryByText(item.value);
      expect(link).toBeNull();
    }
  });
});
