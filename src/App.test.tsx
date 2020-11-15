import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './components/App'

test('find counter', () => {
  render(<App />)
  const linkElement = screen.getByText(/0/i)
  expect(linkElement).toBeInTheDocument()
});
