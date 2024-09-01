import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ImagesManagerMedia, type MediaProps } from './ImagesManagerMedia';

jest.mock('./ImagesManagerMediaFilter', () => ({
  ImagesManagerMediaFilter: jest.fn(({ onSelect }) => (
    <div data-testid='media-filter' onClick={() => onSelect({})}>
      ImagesManagerMediaFilter
    </div>
  )),
}));

jest.mock('./ImagesManagerMediaDetails', () => ({
  ImagesManagerMediaDetails: jest.fn(
    ({ image, fileName, publishedAt, size, resolution }) => (
      <div data-testid='media-details'>
        ImagesManagerMediaDetails: {image}, {fileName}, {publishedAt}, {size},{' '}
        {resolution}
      </div>
    ),
  ),
}));

describe('ImagesManagerMedia', () => {
  const mockImages: MediaProps[] = [
    { id: 1, url: 'https://picsum.photos/200/300', alt: 'image 1' },
    { id: 2, url: 'https://picsum.photos/200/300', alt: 'image 2' },
    { id: 3, url: 'https://picsum.photos/200/300', alt: 'image 3' },
  ];

  it('should render ImagesManagerMediaFilter and ImagesManagerMediaDetails', () => {
    render(<ImagesManagerMedia onSelectMedia={jest.fn()} />);

    expect(screen.getByTestId('media-filter')).toBeInTheDocument();
    expect(screen.getByTestId('media-details')).toBeInTheDocument();
  });

  it('should render images and handle image selection', () => {
    const onSelectMediaMock = jest.fn();

    render(<ImagesManagerMedia onSelectMedia={onSelectMediaMock} />);

    const imageButtons = screen.getAllByRole('button');

    expect(imageButtons).toHaveLength(mockImages.length);

    fireEvent.click(imageButtons[2]);

    expect(onSelectMediaMock).toHaveBeenCalledWith({
      id: 3,
      url: 'https://picsum.photos/200/300',
      alt: 'image 3',
    });
  });
});
