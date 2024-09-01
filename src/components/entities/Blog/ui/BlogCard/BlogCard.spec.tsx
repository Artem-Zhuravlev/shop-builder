import { render } from '@testing-library/react';
import { BlogCard, type BlogCardProps } from './BlogCard';

const testProps: BlogCardProps = {
  author: 'John Doe',
  comments: 10,
  image: '/example-image.jpg',
  publishedAt: '2024-04-18',
  title: 'Test Blog Post',
  to: '/blog/test-blog-post',
  viewed: 100,
};

describe('BlogCard component', () => {
  it('should render correctly with provided props', () => {
    const { getByText, getByAltText } = render(<BlogCard {...testProps} />);

    expect(getByText(testProps.author)).toBeInTheDocument();
    expect(getByText(testProps.comments.toString())).toBeInTheDocument();
    expect(getByText(testProps.viewed.toString())).toBeInTheDocument();
    expect(
      getByText(new Date(testProps.publishedAt).toLocaleDateString()),
    ).toBeInTheDocument();
    expect(getByText(testProps.title)).toBeInTheDocument();
    expect(getByAltText(testProps.title)).toBeInTheDocument();
  });

  it('should render a link with correct href', () => {
    const { getByText } = render(<BlogCard {...testProps} />);

    const link = getByText(testProps.title).closest('a');
    expect(link).toHaveAttribute('href', testProps.to);
  });
});
