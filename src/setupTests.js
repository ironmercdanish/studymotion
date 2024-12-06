import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';


test('renders the component with the correct text', () => {
  render(<MyComponent />);

  // Use jest-dom matchers
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveTextContent(/submit/i);
  expect(screen.getByTestId('my-element')).toHaveClass('active');
});
