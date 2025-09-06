import { describe, it, expect } from 'vitest';
import { formatDateYYYYMMDD, formatDateYYYYslashMMslashDD } from '../src/index';

describe('date format utils', () => {
  const d = new Date('2025-09-06T10:30:00Z');

  it('formatDateYYYYMMDD', () => {
    expect(formatDateYYYYMMDD(d)).toBe('2025-09-06');
    expect(formatDateYYYYMMDD(null)).toBe('');
    expect(formatDateYYYYMMDD(new Date('invalid'))).toBe('');
  });

  it('formatDateYYYYslashMMslashDD', () => {
    expect(formatDateYYYYslashMMslashDD(d)).toBe('2025/09/06');
    expect(formatDateYYYYslashMMslashDD(undefined)).toBe('');
    expect(formatDateYYYYslashMMslashDD(new Date('invalid'))).toBe('');
  });
});
