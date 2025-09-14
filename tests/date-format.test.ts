import { describe, it, expect } from 'vitest';
import {
  formatDateYYYYMMDD,
  formatDateYYYYslashMMslashDD,
  formatJapaneseDate,
  formatDateTimeYYYYMMDDHHmmss,
} from '../src/index';

describe('date format utils', () => {
  // 2025-09-06 10:30:00 UTC
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

  it('formatJapaneseDate', () => {
    expect(formatJapaneseDate(d)).toBe('2025年9月6日（土）');
    expect(formatJapaneseDate(undefined)).toBe('');
    expect(formatJapaneseDate(new Date('invalid'))).toBe('');
  });

  it('formatDateTimeYYYYMMDDHHmmss', () => {
    // Note: The input date is in UTC, so the output will depend on the local timezone.
    expect(formatDateTimeYYYYMMDDHHmmss(d)).toBe('2025-09-06 19:30:00');
    expect(formatDateTimeYYYYMMDDHHmmss(null)).toBe('');
    expect(formatDateTimeYYYYMMDDHHmmss(new Date('invalid'))).toBe('');
  });
});
