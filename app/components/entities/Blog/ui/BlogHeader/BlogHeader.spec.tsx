import '@testing-library/jest-dom';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import { BlogHeader } from './BlogHeader';

describe('BlogHeader', () => {
  const props = {
    title: 'Test Blog',
    author: 'Test Author',
    slug: 'test-blog',
    comments: 5,
    publishedAt: '2024-05-01',
    viewed: 100,
  };

  it('displays correct number of comments', () => {
    const { getByText } = customRender(<BlogHeader {...props} />);
    expect(getByText(`${props.comments} Comments`)).toBeInTheDocument();
  });

  it('displays correct number of views', () => {
    const { getByText } = customRender(<BlogHeader {...props} />);
    expect(getByText(props.viewed.toString())).toBeInTheDocument();
  });
});
