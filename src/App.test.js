import { render, screen } from '@testing-library/react';
import App from './App';

test('renders kNN Data', () => {
  render(<App />);
  const linkElement = screen.getByText(/kNN Data/i);
  expect(linkElement).toBeInTheDocument();
});
