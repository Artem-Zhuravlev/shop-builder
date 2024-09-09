import React from 'react';
import { render } from '@testing-library/react';
import { SkeletonBase } from './SkeletonBase';

describe('SkeletonBase Component', () => {
	it('renders correctly with given width and height', () => {
		const { container } = render(<SkeletonBase width='100px' height='50px' />);

		const skeleton = container.firstChild;

		expect(skeleton).toBeInTheDocument();
		expect(skeleton).toHaveStyle('max-width: 100px');
		expect(skeleton).toHaveStyle('height: 50px');
	});

	it('applies default styles when no width and height are provided', () => {
		const { container } = render(<SkeletonBase width='auto' height='auto' />);

		const skeleton = container.firstChild;

		expect(skeleton).toBeInTheDocument();
		expect(skeleton).toHaveStyle('max-width: auto');
		expect(skeleton).toHaveStyle('height: auto');
	});
});
