import { cos } from "../src/index";

describe("cos", () => {
  test("should return 1 for 0", () => {
    expect(cos(0)).toEqual(1);
  });
});
