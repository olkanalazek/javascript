import { division } from "../src/index";

describe("division", () => {
  test("should return 3 for (9, 3)", () => {
    expect(division(9, 3)).toEqual(3);
  });

  test("should return 2 for (8, 4)", () => {
    expect(division(8, 4)).toEqual(2);
  });
});
