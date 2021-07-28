import { sqrt } from "../src/index";

describe("sqrt", () => {
  test("should return 5 for 25", () => {
    expect(sqrt(25)).toEqual(5);
  });
});
