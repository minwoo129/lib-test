export const percent = (num: number, decimal: number, unit: number = 0) => {
  if (decimal === 0) {
    throw new Error('Error: invalid decimal(infinite)');
  }

  const result = (num / decimal) * 100;

  if (result < 0 || result > 100) {
    throw new Error('Error: out of range');
  }

  return result.toFixed(unit);
};
