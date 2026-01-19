export const at = <T>(array: readonly T[], at: number) => {
  if (array.length === 0) {
    return undefined;
  }

  if (!Number.isInteger(at)) {
    throw new Error('Error: invalid index');
  }

  if (at >= 0) {
    return array[at % array.length];
  }

  const decIdx = (at * -1) % array.length;
  return decIdx === 0 ? array[0] : array[array.length - decIdx];
};
