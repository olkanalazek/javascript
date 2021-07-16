import { substract } from "../src/index";

describe("substract", () => {
  test("should return 0 for (0, 0)", () => {
    expect(substract(0, 0)).toEqual(0);
  });

  test("should return -6 for (2, 8)", () => {
    expect(substract(2, 8)).toEqual(-6);
  });
});
