import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BlogCard } from './BlogCard';

describe('BlogCard Component', () => {
  const mockData = {
    to: '/blog/post-1',
    item: {
      image: 'image.jpg',
      author: 'John Doe',
      comments: 5,
      viewed: 100,
      title: 'Sample Blog Post',
      published_at: '2023-07-20'
    }
  };

  it('renders blog card with correct data', () => {
    const { item } = mockData;

    const { getByText, getByAltText } = render(<BlogCard {...mockData} />);

    const blogTitle = getByText(item.title);
    const blogAuthor = getByText(item.author);
    const blogComments = getByText(item.comments.toString());
    const blogViewed = getByText(item.viewed.toString());
    const blogImage = getByAltText(item.title);
    const blogPublishedDate = getByText(/2023/);

    expect(blogTitle).toBeInTheDocument();
    expect(blogAuthor).toBeInTheDocument();
    expect(blogComments).toBeInTheDocument();
    expect(blogViewed).toBeInTheDocument();
    expect(blogImage).toBeInTheDocument();
    expect(blogPublishedDate).toBeInTheDocument();
  });

  it('displays the published date in the correct format', () => {
    const { getByText } = render(<BlogCard {...mockData} />);
    
    const blogPublishedDate = getByText(/2023/);

    expect(blogPublishedDate).toBeInTheDocument();
  });
});
