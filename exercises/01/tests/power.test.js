import { power } from "../src/index";

describe("power", () => {
  test("should return 1 for (0, 0)", () => {
    expect(power(0, 0)).toEqual(1);
  });

  test("should return 4 for (2, 2)", () => {
    expect(power(2, 2)).toEqual(4);
  });
});
