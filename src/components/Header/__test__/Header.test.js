import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop getByText', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title prop getByRole', () => {
//     render(<Header title="My Header"/>);
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();
//   });

  it('should render same text passed into title prop getByRole alt', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading", {name: "My Header"});
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed into title prop getByTitle', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
  });

  it('should render same text passed into title prop getByTestId', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTestId("header");
    expect(headingElement).toBeInTheDocument();
  });
