import { reverse } from "../src/index";

describe("reverse", () => {
  test("should return empty string for empty input", () => {
    expect(reverse('')).toEqual('');
  });

  test("should return empty string for null input", () => {
    expect(reverse(null)).toEqual('');
  });

  test("should return empty string for undefined input", () => {
    expect(reverse()).toEqual('');
  });

  test("should reverse 'abba'", () => {
    const given = 'abba';
    const expected = 'abba';

    expect(reverse(given)).toEqual(expected);
  });

  test("should reverse 'hello world'", () => {
    const given = 'hello world';
    const expected = 'dlrow olleh';

    expect(reverse(given)).toEqual(expected);
  });
});
