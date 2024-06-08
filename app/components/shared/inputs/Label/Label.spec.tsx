import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label component', () => {
	it('renders error message when hasError is true', () => {
		const { getByText } = render(
			<Label
				hasError
				error='This is an error'>
				Test
			</Label>
		);
		expect(getByText('This is an error')).toBeInTheDocument();
	});

	it('does not render error message when hasError is false', () => {
		const { queryByText } = render(<Label>Test</Label>);
		expect(queryByText('This is an error')).toBeNull();
	});
});
