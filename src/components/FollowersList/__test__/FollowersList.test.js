import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => {
    return (
      <BrowserRouter>
        <FollowersList />
      </BrowserRouter>
    );
  };

it('should check for the item from API', async () => {
  render(<MockFollowersList/>);
  const followerDivElement = await screen.findByTestId("follower-item-0")
  screen.debug()
  expect(followerDivElement).toBeInTheDocument();
});

// it('should check for the multiple item from API', async () => {
//     render(<MockFollowersList/>);
//     const followerDivElement = await screen.findAllByTestId(/follower-item/i)
//     expect(followerDivElement.length).toBe(5);
//   });