import { render, screen } from "@testing-library/react";
import Input from "@/components/Input";

describe("Input Component", () => {
  test("renders input field", () => {
    render(<Input value="" onChange={() => {}} />);

    expect(screen.getByPlaceholderText("Type here")).toBeInTheDocument();
  });
});
