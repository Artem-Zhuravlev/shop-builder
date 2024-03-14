import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeadingBase } from './HeadingBase';

describe('HeadingBase Component', () => {
  it('renders heading with correct level and content', () => {
    const text = 'Sample Heading';
    const level = 3;

    const { getByText, container } = render(
      <HeadingBase level={level}>{text}</HeadingBase>
    );

    const heading = getByText(text);
    expect(heading.tagName).toBe(`H${level}`);

    expect(container.firstChild).toHaveClass(`h${level}`);
  });

  it('renders heading with additional custom class', () => {
    const text = 'Custom Heading';
    const level = 2;
    const additionalClass = 'custom-heading';

    const { getByText, container } = render(
      <HeadingBase level={level} additionalClass={additionalClass}>
        {text}
      </HeadingBase>
    );

    const heading = getByText(text);
    expect(heading.tagName).toBe(`H${level}`);

    expect(container.firstChild).toHaveClass(`h${level}`);
    expect(container.firstChild).toHaveClass(additionalClass);
  });

  it('renders heading with custom className', () => {
    const text = 'Custom Class Heading';
    const level = 4;
    const className = 'my-custom-heading';

    const { getByText, container } = render(
      <HeadingBase level={level} className={className}>
        {text}
      </HeadingBase>
    );

    const heading = getByText(text);
    expect(heading.tagName).toBe(`H${level}`);

    expect(container.firstChild).toHaveClass(className);
  });
});
