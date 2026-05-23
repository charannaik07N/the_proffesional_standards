import { render, screen, waitFor } from "@testing-library/react";
import UserList from "@/components/UserList";

describe("UserList Component", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              name: "Charan",
            },
          ]),
      }),
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renders mocked users", async () => {
    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText("Charan")).toBeInTheDocument();
    });
  });

  test("does not set state after unmount", async () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    let resolveJson;

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          new Promise((resolve) => {
            resolveJson = resolve;
          }),
      }),
    );

    const { unmount } = render(<UserList />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });

    unmount();
    resolveJson([{ id: 1, name: "Ghost" }]);

    await Promise.resolve();
    await Promise.resolve();

    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });
});
