import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InfoListItem } from './InfoListItem';

describe('InfoListItem Component', () => {
	test('renders label and children correctly', () => {
		const label = 'Test Label';
		const childrenText = 'Test Children';

		const { getByText } = render(
			<InfoListItem label={label}>{childrenText}</InfoListItem>
		);

		const renderedLabel = getByText(label);
		const renderedChildren = getByText(childrenText);

		expect(renderedLabel).toBeInTheDocument();
		expect(renderedChildren).toBeInTheDocument();
	});
});
