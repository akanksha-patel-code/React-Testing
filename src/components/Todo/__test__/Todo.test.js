import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
    return (
      <BrowserRouter>
        <Todo/>
      </BrowserRouter>
    );
  };

it('should render data in the todo list', () => {
  render(<MockTodo/>);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", {name: /Add/i})
  fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}})
  fireEvent.click(buttonElement);
  const divElement = screen.getByText(/Go Grocery Shopping/i);
  expect(divElement).toBeInTheDocument();

});

const AddTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name: /Add/i})
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}})
        fireEvent.click(buttonElement);
    });
}

it('should render multiple data in the todo list', () => {
    render(<MockTodo/>);
    AddTask(["Go grocery shopping","Go buy eggs","Go buy dresses"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  
  });

  it('task should not have completed class when initially rendered', () => {
    render(<MockTodo/>);
    AddTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active")
  
  });

  it('task should have completed class when initially rendered', () => {
    render(<MockTodo/>);
    AddTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active")
  
  });
