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

  // When we need things synchronous we will go for findBy over getBy

  it('should render same text passed into title prop findByText', async () => {
    render(<Header title="My Header"/>);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });

  // QueryBy

//   it('should render same text passed into title prop getBy', async () => {
//     render(<Header title="My Header"/>);
//     const headingElement = screen.getByText(/dogs/i); // something that doesnt exist on the page
//     expect(headingElement).toBeInTheDocument();
//   });

it('should render same text passed into title prop queryByText', async () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
  });


  // getAllBy

  it('should render same text passed into title prop getAllByRole', () => {
    render(<Header title="My Header"/>);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
  });




