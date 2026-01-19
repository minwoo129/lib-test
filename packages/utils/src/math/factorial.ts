export const factorial = (num: number): number => {
  if (num < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (num === 0 || num === 1) return 1;

  return num * factorial(num - 1);
};
