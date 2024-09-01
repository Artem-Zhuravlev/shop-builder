import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ImagesManagerDownload } from './ImagesManagerDownload';

// Mock the DropzoneBase component
jest.mock('@/components/shared/DropzoneBase', () => ({
	DropzoneBase: jest.fn(({ onDropAccepted }) => (
		<div
			data-testid='dropzone'
			onClick={() => onDropAccepted([new File([], 'test-file.png')])}
		>
			DropzoneBase
		</div>
	)),
}));

describe('ImagesManagerDownload', () => {
	it('should render DropzoneBase', () => {
		render(<ImagesManagerDownload handleActiveTab={jest.fn()} />);

		expect(screen.getByTestId('dropzone')).toBeInTheDocument();
	});

	it('should call handleActiveTab with 1 when a file is accepted', () => {
		const handleActiveTabMock = jest.fn();
		render(<ImagesManagerDownload handleActiveTab={handleActiveTabMock} />);

		fireEvent.click(screen.getByTestId('dropzone'));

		expect(handleActiveTabMock).toHaveBeenCalledWith(1);
	});
});
