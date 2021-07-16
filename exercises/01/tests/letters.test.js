import { count } from "../src/index";

describe("letters", () => {
  test.each(["", null, undefined])(
    "should return empty result for empty string - .count(%s)",
    (input) => {
      expect(count("")).toEqual({});
    }
  );

  test("sanity check", () => {
    expect(count("olaolaolaola")).toEqual({ o: 1, l: 1, a: 1 });
  });
});
