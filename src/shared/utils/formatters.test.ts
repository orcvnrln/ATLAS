import { describe, it, expect } from 'vitest';

// Assume you have a function like this in src/shared/utils/formatters.ts
const formatCurrency = (amount: number, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

describe('formatCurrency', () => {
  it('should format a positive number correctly', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('should format a negative number correctly', () => {
    expect(formatCurrency(-500)).toBe('-$500.00');
  });

  it('should handle zero correctly', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('should use a different currency symbol', () => {
    expect(formatCurrency(100, 'EUR')).toBe('€100.00');
  });
});
