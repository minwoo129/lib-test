import { describe, expect, it } from 'vitest';
import { factorial } from '../../src/math/factorial';

describe('math > factorial', () => {
  it('음수를 제공했을 경우', () => {
    expect(() => factorial(-1)).toThrow(
      'Error: negative number is not allowed',
    );
  });

  it('0을 제공했을 경우', () => {
    expect(factorial(0)).toBe(1);
  });

  it('1을 제공했을 경우', () => {
    expect(factorial(1)).toBe(1);
  });

  [
    { input: 2, output: 2 },
    { input: 3, output: 6 },
    { input: 4, output: 24 },
    { input: 5, output: 120 },
    { input: 6, output: 720 },
    { input: 7, output: 5040 },
    { input: 8, output: 40320 },
    { input: 9, output: 362880 },
    { input: 10, output: 3628800 },
  ].forEach(({ input, output }, idx) =>
    it(`정확도 검증(${idx + 1}): 입력값: ${input}, 예상값: ${output}`, () => {
      expect(factorial(input)).toBe(output);
    }),
  );
});
