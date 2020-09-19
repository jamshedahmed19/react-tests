import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('hello world check test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

test('hello jamshed check test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello Jamshed/i);
  expect(linkElement).toBeInTheDocument();
});
