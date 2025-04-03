import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"; // ✅ Use the Vitest-compatible version
import { describe, it, expect, vi } from "vitest";
import React from "react"; // ✅ Ensures React is properly recognized
import Button from "../globals/ui/Button";

describe("Button Component", () => {
  it("renders the button with default primary variant", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn", "btn-primary");
  });

  it("applies the correct variant class", () => {
    render(<Button variant="success">Success</Button>);
    const button = screen.getByRole("button", { name: /success/i });

    expect(button).toHaveClass("btn", "btn-success");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
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
    const ref = React.createRef<HTMLButtonElement>();
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

    expect(button).toBeDisabled(); // ✅ Check if button is actually disabled
    expect(button).toHaveClass("btn-disabled"); // ✅ Check if class is applied
  });

  it("does not apply `btn-disabled` when only the `variant` is set to `disabled`", () => {
    render(<Button variant="disabled">Disabled Variant</Button>);
    const button = screen.getByRole("button", { name: /disabled variant/i });

    expect(button).not.toBeDisabled(); // ✅ Should not be disabled if only `variant="disabled"`
    expect(button).toHaveClass("btn-disabled"); // ✅ Should still have class
  });
});
