import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  test("increments count on click", async () => {
    render(<Counter />);

    const button = screen.getByText("Increment");

    await userEvent.click(button);

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
