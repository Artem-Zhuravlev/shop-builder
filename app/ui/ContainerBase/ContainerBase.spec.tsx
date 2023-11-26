import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContainerBase } from './ContainerBase';

describe('ContainerBase Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ContainerBase>
        <div>Hello, World!</div>
      </ContainerBase>
    );

    expect(getByText('Hello, World!')).toBeInTheDocument();
  });
});
