import { tan } from "../src/index";

describe("tan", () => {
  test("should return 1.6197751905438615 for 45", () => {
    expect(tan(45)).toEqual(1.6197751905438615);
  });
});
