import { count } from "../src/index";

describe("letters", () => {
  test.each(["", null, undefined])(
    "should return empty result for empty string - .count(%s)",
    (input) => {
      expect(count("")).toEqual({});
    }
  );

  test("sanity check 1", () => {
    expect(count("olaolaola")).toEqual({ o: 3, l: 3, a: 3 });
  });

  test("sanity check 2", () => {
    expect(count("olaolaolaola!")).toEqual({ o: 4, l: 4, a: 4, "!": 1 });
  });
});
