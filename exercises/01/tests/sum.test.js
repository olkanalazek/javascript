import { sum } from "../src/index";

describe("sum", () => {
  test("should return 0 for (0, 0)", () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test("should return 10 for (2, 8)", () => {
    expect(sum(2, 8)).toEqual(10);
  });
});
