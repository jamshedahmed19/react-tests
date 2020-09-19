import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('Name Check Test', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/Jamshed Ahmed/i);
  expect(linkElement).toBeInTheDocument();
});
