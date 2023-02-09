import { render, screen } from '@testing-library/react';
import { Header } from '../../pages/header/header';
test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Welcome to GOT game/i);
  expect(linkElement).toBeInTheDocument();
});
