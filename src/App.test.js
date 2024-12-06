import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('button toggles text visibility', () => {
  render(<App />);
  
  // Assuming there's a button that toggles some text
  const button = screen.getByRole('button', { name: /toggle text/i });
  fireEvent.click(button);
  
  const toggledText = screen.getByText(/this is some toggled text/i);
  expect(toggledText).toBeInTheDocument();
});
