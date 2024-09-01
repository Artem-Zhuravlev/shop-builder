import { fireEvent } from '@testing-library/react';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { LanguageTabs } from './LanguageTabs';
import cls from './LanguageTabs.module.scss';

describe('LanguageTabs', () => {
	it('renders correctly with default props', () => {
		const items = ['en', 'ua'];
		const { container, getByText } = customRender(
			<LanguageTabs items={items} />,
		);

		const langs = ['English', 'Ukraine'];

		// Ensure all tabs are rendered
		for (const item of langs) {
			expect(getByText(item)).toBeInTheDocument();
		}
	});

	it('calls onSelect callback when a tab is clicked', () => {
		const items = ['en', 'fr', 'es'];
		const onSelectMock = jest.fn();
		const { getByText } = customRender(
			<LanguageTabs items={items} onSelect={onSelectMock} />,
		);

		// Click on a tab
		fireEvent.click(getByText('English'));

		// Ensure onSelect is called with the correct item
		expect(onSelectMock).toHaveBeenCalledWith('en');
	});

	it('handles activeTab prop correctly', () => {
		const items = ['en', 'fr', 'es'];
		const { getByText } = customRender(
			<LanguageTabs items={items} activeTab={1} />,
		);

		// Ensure active tab is rendered correctly
		expect(getByText('France')).toHaveClass(cls.LanguageTabsItemActive);
	});
});
