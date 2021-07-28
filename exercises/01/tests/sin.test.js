import { sin } from "../src/index";

describe("sin", () => {
  test("should return 0.8509035245341184 for 45", () => {
    expect(sin(45)).toEqual(0.8509035245341184);
  });
});
