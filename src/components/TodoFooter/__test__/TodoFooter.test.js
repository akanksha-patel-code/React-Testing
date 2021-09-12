import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
    it("should render the correct amount of incomplete task", () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
      });
      
      it("should render 'task' when the number of incomplete tasks is one", () => {
          render(<MockTodoFooter numberOfIncompleteTasks={1} />);
          const paragraphElement = screen.getByText(/1 task left/i);
          expect(paragraphElement).toBeInTheDocument();
        });
      
        it("should render 'task' when the number of incomplete tasks is one assetions", () => {
          render(<MockTodoFooter numberOfIncompleteTasks={1} />);
          const paragraphElement = screen.getByText(/1 task left/i);
          expect(paragraphElement).toBeInTheDocument();
          expect(paragraphElement).toBeTruthy();
          expect(paragraphElement).toBeVisible();
          expect(paragraphElement).toContainHTML("p");
          expect(paragraphElement).toHaveTextContent("1 task left");
          expect(paragraphElement).not.toBeFalsy();
          expect(paragraphElement.textContent).toBe("1 task left");
        });
})


  