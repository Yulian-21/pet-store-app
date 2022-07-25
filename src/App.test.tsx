import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders Box', () => {
  render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  );
  const linkElement = screen.getByText(/pets/i);
  expect(linkElement).toBeInTheDocument();
});
