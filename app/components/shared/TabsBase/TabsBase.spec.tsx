import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { TabsBase } from './TabsBase';

describe('TabsBase component', () => {
  const tabs = [
    { label: 'Tab 1', description: 'Description for Tab 1' },
    { label: 'Tab 2', description: 'Description for Tab 2' },
    { label: 'Tab 3', description: 'Description for Tab 3' },
  ];

  test('renders tabs with correct labels', () => {
    const { getByText } = render(<TabsBase items={tabs} />);

    tabs.forEach((tab) => {
      expect(getByText(tab.label)).toBeInTheDocument();
    });
  });

  test('renders description of active tab', () => {
    const { getByText } = render(<TabsBase items={tabs} />);

    const activeTabDescription = getByText(tabs[0].description);
    expect(activeTabDescription).toBeInTheDocument();
  });

  test('changes active tab on click', () => {
    const { getByText } = render(<TabsBase items={tabs} />);

    const tabToClick = getByText('Tab 2');
    fireEvent.click(tabToClick);

    const newActiveTabDescription = getByText(tabs[1].description);
    expect(newActiveTabDescription).toBeInTheDocument();
  });
});
