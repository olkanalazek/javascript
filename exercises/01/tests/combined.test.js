import {
  sum,
  substract,
  multiplication,
  division,
  power,
  sqrt,
  sin,
} from "../src/index";

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
    const given = multiplication(
      division(20, 4),
      substract(
        -20,
        multiplication(
          -20.5,
          multiplication(
            12,
            multiplication(23.11, multiplication(34.22, division(20, 4)))
          )
        )
      )
    );

    const expected = 4863468.83;

    expect(given).toEqual(expected);
  });

  test("should use combined operations 4", () => {
    // ((5^5) * 2)^3 - (10 / 5)
    const given = substract(
      power(multiplication(2, power(5, 5)), 3),
      division(10, 5)
    );

    const expected = 244140624998;

    expect(given).toEqual(expected);
  });

  test("should use combined operations 5", () => {
    // sqrt(1024) * 2^4 - 128 + (3 * 3) = 393 });
    const given = sum(
      substract(multiplication(sqrt(1024), power(2, 4)), 128),
      multiplication(3, 3)
    );

    const expected = 393;

    expect(given).toEqual(expected);
  });

  // sin(45) * cos(90) = -0.38126
});
