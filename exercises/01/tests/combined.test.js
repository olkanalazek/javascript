import { sum, substract, multiplication } from "../src/index";

describe("combined", () => {
  test("should use combined operations 1", () => {
    // 11 - (2 + (2 + 4))
    const given = substract(11, sum(2, sum(2, 4)));
    const expected = 3;

    expect(given).toEqual(expected);
  });

  test("should use combined operations 2", () => {
    // -34 + (55 - 23 * (3.1415 + -10))
    const given = sum(-34, substract(55, multiplication(23, sum(3.1415, -10))));
    const expected = 178.7455;

    expect(given).toEqual(expected);
  });

  test("should use combined operations 3", () => {
    // (20 / 4) * (-20 - -20.5 * ((20 / 4) * 12 * 23.11 * 34.22))
    const given = 0;
    const expected = 4863468.83;

    expect(given).toEqual(expected);
  });
});
