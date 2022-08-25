import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Given a component Counter", () => {
  describe("When rendered", () => {
    test("Then it should show an element ul with 4 elements li", () => {
      const listElements = 4;

      render(<Counter />);

      const expectedListElements = screen.getAllByRole("listitem");

      expect(expectedListElements.length).toBe(listElements);
    });
  });
});
