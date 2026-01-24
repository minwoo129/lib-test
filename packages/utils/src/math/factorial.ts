export const factorial = (num: number): number => {
  if (!Number.isInteger(num)) {
    throw new Error('Error: invalid number');
  }
  if (num < 0) {
    throw new Error('Error: negative number is not allowed');
  }
  if (num === 0 || num === 1) return 1;

  return num * factorial(num - 1);
};
