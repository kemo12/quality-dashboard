import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coming Soon test', () => {
  render(<App />);
  const h1Element = screen.getByText(/kamel dawoud,coming soon/i);
  expect(h1Element).toBeInTheDocument();
});
