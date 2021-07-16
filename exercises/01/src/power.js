const power = (a, b) => {
  let result = a;

  if (b === 0) {
    return 1;
  }

  for (let x = 0; x < b - 1; x++) {
    result = result * a;
  }

  return result;
};

export { power };
