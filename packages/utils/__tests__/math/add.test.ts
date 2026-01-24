import { describe, expect, it } from 'vitest';
import { add } from '../../src/math/add';

describe('math > add', () => {
  it('합계가 정상적으로 출력되는 지 여부', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(add(...nums)).toBe(15);
  });
});
