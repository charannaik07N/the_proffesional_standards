import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import Input from "@/components/Input";

function TestInput() {
  const [value, setValue] = useState("");

  return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
}

describe("Input Interaction", () => {
  test("updates input value", async () => {
    render(<TestInput />);

    const input = screen.getByPlaceholderText("Type here");

    await userEvent.type(input, "Hello");

    expect(input).toHaveValue("Hello");
  });
});
