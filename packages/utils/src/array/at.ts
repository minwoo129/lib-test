export const at = <T>(array: readonly T[], at: number) => {
  if (array.length === 0) {
    return undefined;
  }

  if (!Number.isInteger(at)) {
    throw new Error('Error: invalid index');
  }

  // Handle negative indices (count from end)
  const index = at < 0 ? array.length + at : at;

  // Return undefined for out-of-bounds indices
  if (index < 0 || index >= array.length) {
    return undefined;
  }

  return array[index];
};
