import type { Section } from '../types';

export const sections: Section[] = [
  {
    id: 'currency-formatting',
    title: 'Currency Formatting',
    description: 'Format currencies with locale-specific rules and symbols',
    functions: [
      {
        name: 'formatCurrency',
        description: 'Formats a currency amount with locale-specific formatting',
        signature:
          'formatCurrency(amount: number, currency: string, options?: FormatCurrencyOptions): FormattedCurrency',
        example: `import { formatCurrency } from 'monie-utils';

const result = formatCurrency(1234.56, 'USD');
// Returns: { formatted: '$1,234.56', amount: 1234.56, currency: 'USD', locale: 'en-US', isCompact: false }

const euroResult = formatCurrency(1234.56, 'EUR', { locale: 'de-DE', showCode: true });
// Returns: { formatted: '1.234,56 EUR', amount: 1234.56, currency: 'EUR', locale: 'de-DE', isCompact: false }`,
        liveDemo: () => ({ formatted: '$1,234.56', amount: 1234.56, currency: 'USD', locale: 'en-US' }),
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '1234.56' },
          { name: 'currency', type: 'text', label: 'Currency', placeholder: 'USD' },
        ],
      },
      {
        name: 'formatMoney',
        description: 'Simple string formatting for currency amounts',
        signature: 'formatMoney(amount: number, currency: string, locale?: string): string',
        example: `import { formatMoney } from 'monie-utils';

const formatted = formatMoney(1234.56, 'USD');
// Returns: '$1,234.56'

const euroFormatted = formatMoney(1234.56, 'EUR', 'de-DE');
// Returns: '1.234,56 €'`,
        liveDemo: () => '$1,234.56',
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '1234.56' },
          { name: 'currency', type: 'text', label: 'Currency', placeholder: 'USD' },
          { name: 'locale', type: 'text', label: 'Locale (optional)', placeholder: 'en-US' },
        ],
      },
      {
        name: 'formatCents',
        description: 'Formats amounts from smallest currency unit (cents/satoshis)',
        signature:
          'formatCents(cents: number, currency: string, options?: FormatCurrencyOptions): FormattedCurrency',
        example: `import { formatCents } from 'monie-utils';

const result = formatCents(12345, 'USD');
// Returns: { formatted: '$123.45', amount: 123.45, currency: 'USD', locale: 'en-US', isCompact: false }

const btcResult = formatCents(10000000, 'BTC');
// Returns: { formatted: '₿0.10000000', amount: 0.1, currency: 'BTC', locale: 'en-US', isCompact: false }`,
        liveDemo: () => ({ formatted: '$123.45', amount: 123.45, currency: 'USD' }),
        inputFields: [
          { name: 'cents', type: 'number', label: 'Cents Amount', placeholder: '12345' },
          { name: 'currency', type: 'text', label: 'Currency', placeholder: 'USD' },
        ],
      },
      {
        name: 'formatCompactCurrency',
        description: 'Formats large amounts in compact notation (1M, 1B, etc.)',
        signature:
          'formatCompactCurrency(amount: number, currency: string, options?: FormatCurrencyOptions): FormattedCurrency',
        example: `import { formatCompactCurrency } from 'monie-utils';

const result = formatCompactCurrency(1500000, 'USD');
// Returns: { formatted: '$1.5M', amount: 1500000, currency: 'USD', locale: 'en-US', isCompact: true }

const billionResult = formatCompactCurrency(2500000000, 'USD');
// Returns: { formatted: '$2.5B', amount: 2500000000, currency: 'USD', locale: 'en-US', isCompact: true }`,
        liveDemo: () => ({ formatted: '$1.5M', amount: 1500000, currency: 'USD', isCompact: true }),
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '1500000' },
          { name: 'currency', type: 'text', label: 'Currency', placeholder: 'USD' },
        ],
      },
    ],
  },
  {
    id: 'validation-parsing',
    title: 'Validation & Parsing',
    description: 'Validate amounts and parse currency strings safely',
    functions: [
      {
        name: 'isValidAmount',
        description: 'Checks if a value is a valid money amount',
        signature: 'isValidAmount(amount: unknown): amount is number',
        example: `import { isValidAmount } from 'monie-utils';

console.log(isValidAmount(100.50)); // true
console.log(isValidAmount(NaN)); // false
console.log(isValidAmount("123")); // false
console.log(isValidAmount(Infinity)); // false`,
        liveDemo: () => true,
        inputFields: [
          {
            name: 'amount',
            type: 'number',
            label: 'Amount to Validate',
            placeholder: '100.50',
          },
        ],
      },
      {
        name: 'isValidCurrency',
        description: 'Validates currency codes against ISO 4217 and cryptocurrencies',
        signature: 'isValidCurrency(currencyCode): currencyCode is string',
        example: `import { isValidCurrency } from 'monie-utils';

console.log(isValidCurrency('USD')); // true
console.log(isValidCurrency('BTC')); // true
console.log(isValidCurrency('INVALID')); // false`,
        liveDemo: () => true,
        inputFields: [
          { name: 'currencyCode', type: 'text', label: 'Currency Code', placeholder: 'USD' },
        ],
      },
      {
        name: 'parseAmount',
        description: 'Parses string to number amount',
        signature: 'parseAmount(amountString: string): ParsedAmount',
        example: `import { parseAmount } from 'monie-utils';

const result = parseAmount('123.45');
// Returns: { amount: 123.45, isValid: true }

const invalid = parseAmount('invalid');
// Returns: { amount: 0, isValid: false }`,
        liveDemo: () => ({ amount: 123.45, isValid: true }),
        inputFields: [
          { name: 'amountString', type: 'text', label: 'Amount String', placeholder: '123.45' },
        ],
      },
      {
        name: 'isPositiveAmount',
        description: 'Checks if an amount is positive',
        signature: 'isPositiveAmount(amount: number): boolean',
        example: `import { isPositiveAmount } from 'monie-utils';

console.log(isPositiveAmount(100)); // true
console.log(isPositiveAmount(-50)); // false
console.log(isPositiveAmount(0)); // false`,
        liveDemo: () => true,
        inputFields: [{ name: 'amount', type: 'number', label: 'Amount', placeholder: '100' }],
      },
      {
        name: 'isWithinRange',
        description: 'Checks if an amount is within a specified range',
        signature: 'isWithinRange(amount: number, min: number, max: number): boolean',
        example: `import { isWithinRange } from 'monie-utils';

console.log(isWithinRange(50, 10, 100)); // true
console.log(isWithinRange(150, 10, 100)); // false
console.log(isWithinRange(5, 10, 100)); // false`,
        liveDemo: () => true,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '50' },
          { name: 'min', type: 'number', label: 'Minimum', placeholder: '10' },
          { name: 'max', type: 'number', label: 'Maximum', placeholder: '100' },
        ],
      },
      {
        name: 'parseCurrencyString',
        description: 'Extracts amount and currency from formatted string',
        signature: 'parseCurrencyString(currencyString: string): ParsedCurrency',
        example: `import { parseCurrencyString } from 'monie-utils';

const usdResult = parseCurrencyString('$123.45');
// Returns: { amount: 123.45, currency: 'USD', isValid: true }

const eurResult = parseCurrencyString('€1.234,56');
// Returns: { amount: 1234.56, currency: 'EUR', isValid: true }`,
        liveDemo: () => ({ amount: 123.45, currency: 'USD', isValid: true }),
        inputFields: [
          {
            name: 'currencyString',
            type: 'text',
            label: 'Currency String',
            placeholder: '$123.45',
          },
        ],
      },
      {
        name: 'normalizeAmount',
        description: 'Normalizes amount to standard format',
        signature: 'normalizeAmount(amount: number, options?: NormalizeOptions): number',
        example: `import { normalizeAmount } from 'monie-utils';

const normalized = normalizeAmount(123.456789);
// Returns: 123.46

const custom = normalizeAmount(123.456789, { decimalPlaces: 4 });
// Returns: 123.4568`,
        liveDemo: () => 123.46,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '123.456789' },
          { name: 'decimalPlaces', type: 'number', label: 'Decimal Places', placeholder: '2' },
        ],
      },
      {
        name: 'parseFormattedCurrency',
        description: 'Parses formatted currency string with locale awareness',
        signature:
          'parseFormattedCurrency(formattedString: string, locale?: string): ParsedCurrency',
        example: `import { parseFormattedCurrency } from 'monie-utils';

const usd = parseFormattedCurrency('$1,234.56', 'en-US');
// Returns: { amount: 1234.56, currency: 'USD', isValid: true }

const euro = parseFormattedCurrency('1.234,56 €', 'de-DE');
// Returns: { amount: 1234.56, currency: 'EUR', isValid: true }`,
        liveDemo: () => ({ amount: 1234.56, currency: 'USD', isValid: true }),
        inputFields: [
          {
            name: 'formattedString',
            type: 'text',
            label: 'Formatted String',
            placeholder: '$1,234.56',
          },
          { name: 'locale', type: 'text', label: 'Locale (optional)', placeholder: 'en-US' },
        ],
      },
    ],
  },
  {
    id: 'currency-conversion',
    title: 'Currency Conversion',
    description: 'Convert between fiat and cryptocurrencies',
    functions: [
      {
        name: 'convertCurrency',
        description: 'Converts between currencies with exchange rates',
        signature:
          'convertCurrency(amount: number, fromCurrency: string, toCurrency: string, rate?: number): ConversionResult',
        example: `import { convertCurrency } from 'monie-utils';

const result = convertCurrency(100, 'USD', 'EUR', 0.85);
// Returns: { amount: 85, fromCurrency: 'USD', toCurrency: 'EUR', rate: 0.85 }

const sameResult = convertCurrency(100, 'USD', 'USD');
// Returns: { amount: 100, fromCurrency: 'USD', toCurrency: 'USD', rate: 1 }`,
        liveDemo: () => ({ amount: 85, fromCurrency: 'USD', toCurrency: 'EUR', rate: 0.85 }),
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '100' },
          { name: 'fromCurrency', type: 'text', label: 'From Currency', placeholder: 'USD' },
          { name: 'toCurrency', type: 'text', label: 'To Currency', placeholder: 'EUR' },
          { name: 'rate', type: 'number', label: 'Exchange Rate', placeholder: '0.85' },
        ],
      },
      {
        name: 'convertWithFee',
        description: 'Converts currency with transaction fee',
        signature:
          'convertWithFee(amount: number, rate: number, feePercentage: number): ConversionWithFee',
        example: `import { convertWithFee } from 'monie-utils';

const result = convertWithFee(100, 0.85, 2.5);
// Returns: { convertedAmount: 85, fee: 2.125, totalCost: 87.125, effectiveRate: 0.8713 }`,
        liveDemo: () => ({
          convertedAmount: 85,
          fee: 2.125,
          totalCost: 87.125,
          effectiveRate: 0.8713,
        }),
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '100' },
          { name: 'rate', type: 'number', label: 'Exchange Rate', placeholder: '0.85' },
          { name: 'feePercentage', type: 'number', label: 'Fee Percentage', placeholder: '2.5' },
        ],
      },
      {
        name: 'bulkConvert',
        description: 'Converts multiple amounts at once',
        signature:
          'bulkConvert(amounts: number[], fromCurrency: string, toCurrency: string, rate: number): BulkConversionResult',
        example: `import { bulkConvert } from 'monie-utils';

const result = bulkConvert([100, 200, 300], 'USD', 'EUR', 0.85);
// Returns: { convertedAmounts: [85, 170, 255], totalOriginal: 600, totalConverted: 510, rate: 0.85 }`,
        liveDemo: () => ({
          convertedAmounts: [85, 170, 255],
          totalOriginal: 600,
          totalConverted: 510,
          rate: 0.85,
        }),
        inputFields: [
          { name: 'amounts', type: 'text', label: 'Amounts (JSON array)', placeholder: '[100, 200, 300]' },
          { name: 'fromCurrency', type: 'text', label: 'From Currency', placeholder: 'USD' },
          { name: 'toCurrency', type: 'text', label: 'To Currency', placeholder: 'EUR' },
          { name: 'rate', type: 'number', label: 'Exchange Rate', placeholder: '0.85' },
        ],
      },
    ],
  },
  {
    id: 'arithmetic-operations',
    title: 'Arithmetic Operations',
    description: 'Perform precise money calculations',
    functions: [
      {
        name: 'calculateTip',
        description: 'Calculates tip amount',
        signature: 'calculateTip(amount: number, percentage: number): number',
        example: `import { calculateTip } from 'monie-utils';

const tip = calculateTip(100, 15);
// Returns: 15

const customTip = calculateTip(85.50, 20);
// Returns: 17.1`,
        liveDemo: () => 15,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Bill Amount', placeholder: '100' },
          { name: 'percentage', type: 'number', label: 'Tip Percentage', placeholder: '15' },
        ],
      },
      {
        name: 'calculateTax',
        description: 'Calculates tax amount',
        signature: 'calculateTax(amount: number, taxRate: number): number',
        example: `import { calculateTax } from 'monie-utils';

const tax = calculateTax(100, 8.5);
// Returns: 8.5

const salesTax = calculateTax(250, 10);
// Returns: 25`,
        liveDemo: () => 8.5,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '100' },
          { name: 'taxRate', type: 'number', label: 'Tax Rate (%)', placeholder: '8.5' },
        ],
      },
      {
        name: 'roundMoney',
        description: 'Rounds money to specified precision',
        signature: 'roundMoney(amount: number, precision?: number): number',
        example: `import { roundMoney } from 'monie-utils';

const rounded = roundMoney(123.456);
// Returns: 123.46

const customPrecision = roundMoney(123.456, 1);
// Returns: 123.5`,
        liveDemo: () => 123.46,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '123.456' },
          { name: 'decimalPlaces', type: 'number', label: 'Decimal Places', placeholder: '2' },
        ],
      },
      {
        name: 'addMoney',
        description: 'Adds two money amounts',
        signature: 'addMoney(amount1: number, amount2: number, currency?: string): number',
        example: `import { addMoney } from 'monie-utils';

const result = addMoney(100.25, 50.75);
// Returns: 151

const withCurrency = addMoney(100.25, 50.75, 'USD');
// Returns: 151`,
        liveDemo: () => 151,
        inputFields: [
          { name: 'amount1', type: 'number', label: 'First Amount', placeholder: '100.25' },
          { name: 'amount2', type: 'number', label: 'Second Amount', placeholder: '50.75' },
        ],
      },
      {
        name: 'subtractMoney',
        description: 'Subtracts money amounts',
        signature: 'subtractMoney(amount1: number, amount2: number, currency?: string): number',
        example: `import { subtractMoney } from 'monie-utils';

const result = subtractMoney(100.75, 25.25);
// Returns: 75.5

const withCurrency = subtractMoney(100.75, 25.25, 'USD');
// Returns: 75.5`,
        liveDemo: () => 75.5,
        inputFields: [
          { name: 'amount1', type: 'number', label: 'First Amount', placeholder: '100.75' },
          { name: 'amount2', type: 'number', label: 'Second Amount', placeholder: '25.25' },
        ],
      },
      {
        name: 'multiplyMoney',
        description: 'Multiplies money by a number',
        signature: 'multiplyMoney(amount: number, multiplier: number): number',
        example: `import { multiplyMoney } from 'monie-utils';

const result = multiplyMoney(50.25, 3);
// Returns: 150.75

const halfResult = multiplyMoney(100, 1.5);
// Returns: 150`,
        liveDemo: () => 150.75,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '50.25' },
          { name: 'multiplier', type: 'number', label: 'Multiplier', placeholder: '3' },
        ],
      },
      {
        name: 'divideMoney',
        description: 'Divides money by a number',
        signature: 'divideMoney(amount: number, divisor: number): number',
        example: `import { divideMoney } from 'monie-utils';

const result = divideMoney(150, 3);
// Returns: 50

const quarterResult = divideMoney(100, 4);
// Returns: 25`,
        liveDemo: () => 50,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '150' },
          { name: 'divisor', type: 'number', label: 'Divisor', placeholder: '3' },
        ],
      },
      {
        name: 'calculateDiscount',
        description: 'Calculates discount amount',
        signature: 'calculateDiscount(amount: number, discountRate: number): number',
        example: `import { calculateDiscount } from 'monie-utils';

const discount = calculateDiscount(100, 10);
// Returns: 10

const bulkDiscount = calculateDiscount(250, 15);
// Returns: 37.5`,
        liveDemo: () => 10,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '100' },
          {
            name: 'discountRate',
            type: 'number',
            label: 'Discount Rate (%)',
            placeholder: '10',
          },
        ],
      },
      {
        name: 'calculateSimpleInterest',
        description: 'Calculates simple interest',
        signature:
          'calculateSimpleInterest(principal: number, rate: number, time: number): number',
        example: `import { calculateSimpleInterest } from 'monie-utils';

const interest = calculateSimpleInterest(1000, 5, 2);
// Returns: 100

const customInterest = calculateSimpleInterest(5000, 3.5, 1.5);
// Returns: 262.5`,
        liveDemo: () => 100,
        inputFields: [
          { name: 'principal', type: 'number', label: 'Principal Amount', placeholder: '1000' },
          { name: 'rate', type: 'number', label: 'Interest Rate (%)', placeholder: '5' },
          { name: 'time', type: 'number', label: 'Time (years)', placeholder: '2' },
        ],
      },
      {
        name: 'calculateCompoundInterest',
        description: 'Calculates compound interest',
        signature:
          'calculateCompoundInterest(principal: number, rate: number, time: number, frequency?: number): CompoundInterestResult',
        example: `import { calculateCompoundInterest } from 'monie-utils';

const result = calculateCompoundInterest(1000, 5, 2);
// Returns: { finalAmount: 1102.5, interestEarned: 102.5, effectiveRate: 5.125 }

const monthly = calculateCompoundInterest(1000, 5, 2, 12);
// Returns: { finalAmount: 1104.89, interestEarned: 104.89, effectiveRate: 5.244 }`,
        liveDemo: () => ({ finalAmount: 1102.5, interestEarned: 102.5, effectiveRate: 5.125 }),
        inputFields: [
          { name: 'principal', type: 'number', label: 'Principal Amount', placeholder: '1000' },
          { name: 'rate', type: 'number', label: 'Interest Rate (%)', placeholder: '5' },
          { name: 'time', type: 'number', label: 'Time (years)', placeholder: '2' },
          { name: 'compoundsPerYear', type: 'number', label: 'Compounds Per Year', placeholder: '4' },
        ],
      },
      {
        name: 'splitAmount',
        description: 'Splits amount into equal parts',
        signature: 'splitAmount(totalAmount: number, numberOfParts: number): number[]',
        example: `import { splitAmount } from 'monie-utils';

const split = splitAmount(100, 3);
// Returns: [33.33, 33.33, 33.34]

const even = splitAmount(150, 4);
// Returns: [37.5, 37.5, 37.5, 37.5]`,
        liveDemo: () => [33.33, 33.33, 33.34],
        inputFields: [
          { name: 'totalAmount', type: 'number', label: 'Total Amount', placeholder: '100' },
          { name: 'numberOfParts', type: 'number', label: 'Number of Parts', placeholder: '3' },
        ],
      },
      {
        name: 'distributeProportionally',
        description: 'Distributes amount by ratios',
        signature: 'distributeProportionally(totalAmount: number, ratios: number[]): number[]',
        example: `import { distributeProportionally } from 'monie-utils';

const distributed = distributeProportionally(100, [1, 2, 3]);
// Returns: [16.67, 33.33, 50]

const business = distributeProportionally(500, [40, 30, 30]);
// Returns: [200, 150, 150]`,
        liveDemo: () => [16.67, 33.33, 50],
        inputFields: [
          { name: 'totalAmount', type: 'number', label: 'Total Amount', placeholder: '1000' },
          { name: 'weights', type: 'text', label: 'Weights (JSON array)', placeholder: '[1, 2, 3]' },
        ],
      },
      {
        name: 'calculatePercentageOfTotal',
        description: 'Calculates percentage share',
        signature: 'calculatePercentageOfTotal(amount: number, total: number): number',
        example: `import { calculatePercentageOfTotal } from 'monie-utils';

const percentage = calculatePercentageOfTotal(25, 100);
// Returns: 25

const businessShare = calculatePercentageOfTotal(150, 500);
// Returns: 30`,
        liveDemo: () => 25,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '25' },
          { name: 'total', type: 'number', label: 'Total', placeholder: '100' },
        ],
      },
    ],
  },
  {
    id: 'percentage-formatting',
    title: 'Percentage Formatting',
    description: 'Format decimal values as percentages with locale support',
    functions: [
      {
        name: 'formatPercentage',
        description: 'Formats decimal values as percentages',
        signature: 'formatPercentage(decimal: number, options?: PercentageOptions): string',
        example: `import { formatPercentage } from 'monie-utils';

const percent = formatPercentage(0.1525);
// Returns: '15.25%'

const german = formatPercentage(0.1525, { precision: 1, locale: 'de-DE' });
// Returns: '15,3 %'`,
        liveDemo: () => '15.25%',
        inputFields: [
          { name: 'decimal', type: 'number', label: 'Decimal Value', placeholder: '0.1525' },
        ],
      },
    ],
  },
  {
    id: 'localization',
    title: 'Localization',
    description: 'Handle currency formatting for different locales',
    functions: [
      {
        name: 'formatCurrencyByLocale',
        description: 'Formats currency with specific locale rules',
        signature:
          'formatCurrencyByLocale(amount: number, currency: string, locale: string): string',
        example: `import { formatCurrencyByLocale } from 'monie-utils';

const usd = formatCurrencyByLocale(1234.56, 'USD', 'en-US');
// Returns: '$1,234.56'

const euro = formatCurrencyByLocale(1234.56, 'EUR', 'de-DE');
// Returns: '1.234,56 €'`,
        liveDemo: () => '$1,234.56',
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '1234.56' },
          { name: 'currency', type: 'text', label: 'Currency', placeholder: 'USD' },
          { name: 'locale', type: 'text', label: 'Locale', placeholder: 'en-US' },
        ],
      },
      {
        name: 'getLocaleCurrencyInfo',
        description: 'Gets currency information for a locale',
        signature: 'getLocaleCurrencyInfo(locale: string): LocaleCurrencyInfo',
        example: `import { getLocaleCurrencyInfo } from 'monie-utils';

const usInfo = getLocaleCurrencyInfo('en-US');
// Returns: { currency: 'USD', symbol: '$', name: 'US Dollar' }

const deInfo = getLocaleCurrencyInfo('de-DE');
// Returns: { currency: 'EUR', symbol: '€', name: 'Euro' }`,
        liveDemo: () => ({ currency: 'USD', symbol: '$', name: 'US Dollar' }),
        inputFields: [
          { name: 'locale', type: 'text', label: 'Locale', placeholder: 'en-US' },
        ],
      },
      {
        name: 'formatWithGrouping',
        description: 'Adds thousand separators based on locale',
        signature: 'formatWithGrouping(amount: number, locale?: string): string',
        example: `import { formatWithGrouping } from 'monie-utils';

const us = formatWithGrouping(1234567.89);
// Returns: '1,234,567.89'

const german = formatWithGrouping(1234567.89, 'de-DE');
// Returns: '1.234.567,89'`,
        liveDemo: () => '1,234,567.89',
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '1234567.89' },
          { name: 'locale', type: 'text', label: 'Locale', placeholder: 'en-US' },
        ],
      },
      {
        name: 'formatDecimalPlaces',
        description: 'Formats number with specific decimal places',
        signature: 'formatDecimalPlaces(amount: number, decimalPlaces: number): string',
        example: `import { formatDecimalPlaces } from 'monie-utils';

const formatted = formatDecimalPlaces(123.456789, 2);
// Returns: '123.46'

const padded = formatDecimalPlaces(123.1, 4);
// Returns: '123.1000'`,
        liveDemo: () => '123.46',
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '123.456789' },
          { name: 'decimalPlaces', type: 'number', label: 'Decimal Places', placeholder: '2' },
        ],
      },
    ],
  },
  {
    id: 'loan-credit',
    title: 'Loan and Credit Utilities',
    description: 'Calculate loan payments, balances, and credit metrics',
    functions: [
      // Add all loan and credit functions...
      {
        name: 'calculateMonthlyPayment',
        description: 'Calculates monthly loan payment',
        signature:
          'calculateMonthlyPayment(principal: number, rate: number, termMonths: number): number',
        example: `import { calculateMonthlyPayment } from 'monie-utils';

const payment = calculateMonthlyPayment(200000, 4.5, 360);
// Returns: 1013.37

const carLoan = calculateMonthlyPayment(50000, 6, 60);
// Returns: 966.64`,
        liveDemo: () => 1013.37,
        inputFields: [
          { name: 'principal', type: 'number', label: 'Principal', placeholder: '200000' },
          { name: 'annualRate', type: 'number', label: 'Annual Rate (%)', placeholder: '4.5' },
          { name: 'termYears', type: 'number', label: 'Term (Years)', placeholder: '30' },
        ],
      },
    ],
  },
  {
    id: 'investment-returns',
    title: 'Investment and Returns',
    description: 'Calculate investment returns, yields, and future values',
    functions: [
      {
        name: 'calculateROI',
        description: 'Calculates return on investment',
        signature: 'calculateROI(initialInvestment: number, finalValue: number): number',
        example: `import { calculateROI } from 'monie-utils';

const roi = calculateROI(10000, 12000);
// Returns: 20

const loss = calculateROI(5000, 4500);
// Returns: -10`,
        liveDemo: () => 20,
        inputFields: [
          {
            name: 'initialInvestment',
            type: 'number',
            label: 'Initial Investment',
            placeholder: '10000',
          },
          { name: 'finalValue', type: 'number', label: 'Final Value', placeholder: '12000' },
        ],
      },
    ],
  },
  {
    id: 'subscription-payments',
    title: 'Subscription & Recurring Payments',
    description: 'Handle subscription billing and recurring payments',
    functions: [
      {
        name: 'calculateSubscriptionValue',
        description: 'Calculates total subscription cost',
        signature: 'calculateSubscriptionValue(monthlyAmount: number, months: number): number',
        example: `import { calculateSubscriptionValue } from 'monie-utils';

const annual = calculateSubscriptionValue(29.99, 12);
// Returns: 359.88

const halfYear = calculateSubscriptionValue(99, 6);
// Returns: 594`,
        liveDemo: () => 359.88,
        inputFields: [
          {
            name: 'monthlyAmount',
            type: 'number',
            label: 'Monthly Amount',
            placeholder: '29.99',
          },
          { name: 'months', type: 'number', label: 'Number of Months', placeholder: '12' },
        ],
      },
      {
        name: 'calculateProrationAmount',
        description: 'Calculates prorated amount',
        signature:
          'calculateProrationAmount(amount: number, daysUsed: number, totalDays: number): number',
        example: `import { calculateProrationAmount } from 'monie-utils';

const prorated = calculateProrationAmount(100, 15, 30);
// Returns: 50

const monthly = calculateProrationAmount(299, 10, 31);
// Returns: 96.45`,
        liveDemo: () => 50,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Total Amount', placeholder: '100' },
          { name: 'daysUsed', type: 'number', label: 'Days Used', placeholder: '15' },
          { name: 'totalDays', type: 'number', label: 'Total Days', placeholder: '30' },
        ],
      },
    ],
  },
  {
    id: 'utility-functions',
    title: 'Utility Functions',
    description: 'Additional helpful utilities for money handling',
    functions: [
      {
        name: 'roundToNearestCent',
        description: 'Rounds to nearest cent',
        signature: 'roundToNearestCent(amount: number): number',
        example: `import { roundToNearestCent } from 'monie-utils';

const rounded = roundToNearestCent(123.456);
// Returns: 123.46

const rounded2 = roundToNearestCent(99.994);
// Returns: 99.99`,
        liveDemo: () => 123.46,
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '123.456' },
        ],
      },
      {
        name: 'formatThousands',
        description: 'Adds thousand separators',
        signature: 'formatThousands(number: number, options?: ThousandsOptions): string',
        example: `import { formatThousands } from 'monie-utils';

const formatted = formatThousands(1234567.89);
// Returns: '1,234,567.89'

const european = formatThousands(1234567.89, { thousandsSeparator: '.', decimalSeparator: ',' });
// Returns: '1.234.567,89'`,
        liveDemo: () => '1,234,567.89',
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '1234567.89' },
        ],
      },
      {
        name: 'convertToWords',
        description: 'Converts number to words',
        signature:
          'convertToWords(amount: number, options?: { currency?: string }): NumberToWordsResult',
        example: `import { convertToWords } from 'monie-utils';

const words = convertToWords(123.45);
// Returns: { words: 'one hundred twenty-three and forty-five cents' }

const withCurrency = convertToWords(1500, { currency: 'USD' });
// Returns: { words: 'one thousand five hundred dollars', currency: 'USD' }`,
        liveDemo: () => ({ words: 'one hundred twenty-three and forty-five cents' }),
        inputFields: [
          { name: 'amount', type: 'number', label: 'Amount', placeholder: '1234.56' },
        ],
      },
      {
        name: 'formatAccountNumber',
        description: 'Formats account numbers with masking',
        signature:
          'formatAccountNumber(accountNumber: string, options?: AccountNumberOptions): FormattedAccountResult',
        example: `import { formatAccountNumber } from 'monie-utils';

const masked = formatAccountNumber('1234567890');
// Returns: { formatted: '******7890', masked: true, groupSize: 4 }

const custom = formatAccountNumber('1234567890', { maskCharacter: 'X', showLast: 6 });
// Returns: { formatted: 'XXXX567890', masked: true, groupSize: 4 }`,
        liveDemo: () => ({ formatted: '******7890', masked: true, groupSize: 4 }),
        inputFields: [
          { name: 'accountNumber', type: 'text', label: 'Account Number', placeholder: '1234567890123456' },
        ],
      },
    ],
  },
];

// Export individual sections for better organization
export const currencyFormattingSection = sections.find(s => s.id === 'currency-formatting')!;
export const validationParsingSection = sections.find(s => s.id === 'validation-parsing')!;
export const currencyConversionSection = sections.find(s => s.id === 'currency-conversion')!;
export const arithmeticOperationsSection = sections.find(s => s.id === 'arithmetic-operations')!;
export const percentageFormattingSection = sections.find(s => s.id === 'percentage-formatting')!;
export const localizationSection = sections.find(s => s.id === 'localization')!;
export const loanCreditSection = sections.find(s => s.id === 'loan-credit')!;
export const investmentReturnsSection = sections.find(s => s.id === 'investment-returns')!;
export const subscriptionPaymentsSection = sections.find(s => s.id === 'subscription-payments')!;
export const utilityFunctionsSection = sections.find(s => s.id === 'utility-functions')!;
