// count("ola") => { o: 1, l: 1, a: 1 }
// count("olaola") => { o: 2, l: 2, a: 2x }

const count = (input) => {
  let result = {};

  for (let x = 0; x < input.length; x++) {
    const char = input[x];

    result[char] = (result[char] || 0) + 1;
  }

  return result;
};

export { count };
