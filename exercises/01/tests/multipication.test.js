import { multiplication } from "../src/index";

describe("multiplication", () => {
  test("should return 0 for (0, 0)", () => {
    expect(multiplication(0, 0)).toEqual(0);
  });

  test("should return 16 for (2, 8)", () => {
    expect(multiplication(2, 8)).toEqual(16);
  });
});
