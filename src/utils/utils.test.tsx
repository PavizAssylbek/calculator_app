import { calcTipPerPerson, calcTotalPerPerson } from 'utils';
import { describe, expect, it } from 'vitest';

describe('test calculators', () => {
  it('calcTipPerPerson', () => {
    expect(Number(calcTipPerPerson(10, 5, 5))).toBe(0.1);
  });

  it('calcTotalPerPerson', () => {
    expect(Number(calcTotalPerPerson(10, 5, 5))).toBe(2.1);
  });
});
