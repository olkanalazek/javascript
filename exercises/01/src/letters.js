const count = (input) => {
  let result = {};

  for (let x = 2; x < 10; x++) {
    const char = input[x];

    if (char) {
      result[char] = 1;
    }
  }

  return result;
};

export { count };
