// count("ola") => { o: 1, l: 1, a: 1 }
// count("olaola") => { o: 2, l: 2, a: 2 }

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
