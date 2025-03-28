import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensures Jest DOM matchers work
import React from "react";
import Button from "../globals/ui/Button";

// Mocking the `cn` utility
jest.mock("@/utils/cn", () => ({
  cn: (...classes: Array<string | undefined | null>) =>
    classes.filter(Boolean).join(" "),
}));

describe("Button Component", () => {
  it("renders the button with default primary variant", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn", "btn-primary"); // Ensure default variant
  });

  it("applies the correct variant class", () => {
    render(<Button variant="success">Success</Button>);
    const button = screen.getByRole("button", { name: /success/i });

    expect(button).toHaveClass("btn", "btn-success");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("supports custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button", { name: /custom/i });

    expect(button).toHaveClass("custom-class");
  });

  it("forwards refs correctly", () => {
    const ref = React.createRef<HTMLButtonElement>(); // Use createRef instead of jest.fn()
    render(<Button ref={ref}>Ref Button</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("renders children correctly", () => {
    render(<Button>🚀 Launch</Button>);
    expect(screen.getByText("🚀 Launch")).toBeInTheDocument();
  });

  it("disables the button when disabled prop is passed", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button", { name: /disabled/i });

    expect(button).toBeDisabled();
  });
});