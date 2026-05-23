import { render, screen } from "@testing-library/react";
import Card from "@/components/Card";

describe("Card Component", () => {
  test("renders title and description", () => {
    render(<Card title="Test Card" description="Card description" />);

    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("Card description")).toBeInTheDocument();
  });
});
