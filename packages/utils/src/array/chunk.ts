export const chunk = <T>(array: readonly T[], size: number) => {
  if (!Number.isInteger(size) || size <= 0) {
    throw new Error('Error: invalid size');
  }

  const chunkLength = Math.ceil(array.length / size);

  const result: T[][] = [];

  for (let i = 0; i < chunkLength; i++) {
    const start = i * size;
    const end = start + size;

    result.push(array.slice(start, end));
  }

  return result;
};
