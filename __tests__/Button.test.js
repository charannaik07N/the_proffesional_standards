import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button Component", () => {
  test("renders button text", () => {
    render(<Button text="Click Me" />);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
});
