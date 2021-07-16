import { count } from "../src/index";

describe("letters", () => {
  it("should return empty result for empty string", () => {
    expect(count("blah")).toEqual({});
  });
});
