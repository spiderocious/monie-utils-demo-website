import {
  formatCurrency,
  formatMoney,
  formatCents,
  formatCompactCurrency,
  convertCurrency,
  calculateTip,
  calculateTax,
  calculateDiscount,
  calculateSimpleInterest,
  calculateROI,
  calculateSubscriptionValue,
  calculateProrationAmount,
  formatPercentage,
  splitAmount,
  calculatePercentageOfTotal,
  isValidAmount,
  isValidCurrency,
  parseAmount,
  isPositiveAmount,
  isWithinRange,
  parseCurrencyString,
  normalizeAmount,
  parseFormattedCurrency,
  convertWithFee,
  bulkConvert,
  roundMoney,
  addMoney,
  subtractMoney,
  multiplyMoney,
  divideMoney,
  calculateCompoundInterest,
  distributeProportionally,
  formatCurrencyByLocale,
  getLocaleCurrencyInfo,
  formatWithGrouping,
  formatDecimalPlaces,
  calculateMonthlyPayment,
  calculateLoanBalance,
  calculateTotalInterest,
  generateAmortizationSchedule,
  calculateCreditUtilization,
  calculateMinimumPayment,
  calculatePayoffTime,
  calculateAnnualizedReturn,
  calculateDividendYield,
  calculateFutureValue,
  roundToNearestCent,
  roundToBankersRounding,
  truncateToDecimalPlaces,
  ceilToNearestCent,
  formatThousands,
  formatToHundreds,
  removeFormattingFromNumber,
  convertToWords,
  formatAccountNumber,
} from 'monie-utils';

import type { InputValues } from '../types';

export const getLiveResult = (functionName: string, inputs: InputValues): unknown => {
  const functionInputs = inputs[functionName] || {};

  try {
    switch (functionName) {
      case 'formatCurrency':
        return formatCurrency(
          Number(functionInputs.amount) || 1234.56,
          String(functionInputs.currency) || 'USD'
        );
      
      case 'formatMoney':
        return formatMoney(
          Number(functionInputs.amount) || 1234.56,
          String(functionInputs.currency) || 'USD',
          String(functionInputs.locale) || 'en-US'
        );
      
      case 'formatCents':
        return formatCents(
          Number(functionInputs.cents) || 12345,
          String(functionInputs.currency) || 'USD'
        );
      
      case 'formatCompactCurrency':
        return formatCompactCurrency(
          Number(functionInputs.amount) || 1500000,
          String(functionInputs.currency) || 'USD'
        );
      
      case 'convertCurrency':
        return convertCurrency(
          Number(functionInputs.amount) || 100,
          String(functionInputs.fromCurrency) || 'USD',
          String(functionInputs.toCurrency) || 'EUR',
          Number(functionInputs.rate) || 0.85
        );
      
      case 'calculateTip':
        return calculateTip(
          Number(functionInputs.amount) || 100,
          Number(functionInputs.percentage) || 15
        );
      
      case 'calculateTax':
        return calculateTax(
          Number(functionInputs.amount) || 100,
          Number(functionInputs.taxRate) || 8.5
        );
      
      case 'calculateDiscount':
        return calculateDiscount(
          Number(functionInputs.amount) || 100,
          Number(functionInputs.discountRate) || 10
        );
      
      case 'calculateSimpleInterest':
        return calculateSimpleInterest(
          Number(functionInputs.principal) || 1000,
          Number(functionInputs.rate) || 5,
          Number(functionInputs.time) || 2
        );
      
      case 'calculateROI':
        return calculateROI(
          Number(functionInputs.initialInvestment) || 10000,
          Number(functionInputs.finalValue) || 12000
        );
      
      case 'calculateSubscriptionValue':
        return calculateSubscriptionValue(
          Number(functionInputs.monthlyAmount) || 29.99,
          Number(functionInputs.months) || 12
        );
      
      case 'calculateProrationAmount':
        return calculateProrationAmount(
          Number(functionInputs.amount) || 100,
          Number(functionInputs.daysUsed) || 15,
          Number(functionInputs.totalDays) || 30
        );
      
      case 'formatPercentage':
        return formatPercentage(Number(functionInputs.decimal) || 0.1525);
      
      case 'splitAmount':
        return splitAmount(
          Number(functionInputs.totalAmount) || 100,
          Number(functionInputs.numberOfParts) || 3
        );
      
      case 'calculatePercentageOfTotal':
        return calculatePercentageOfTotal(
          Number(functionInputs.amount) || 25,
          Number(functionInputs.total) || 100
        );
      
      case 'isValidAmount':
        return isValidAmount(Number(functionInputs.amount) || 100.5);
      
      case 'isValidCurrency':
        return isValidCurrency(String(functionInputs.currencyCode) || 'USD');
      
      case 'parseAmount':
        return parseAmount(String(functionInputs.amountString) || '123.45');
      
      case 'isPositiveAmount':
        return isPositiveAmount(Number(functionInputs.amount) || 100);
      
      case 'isWithinRange':
        return isWithinRange(
          Number(functionInputs.amount) || 50,
          Number(functionInputs.min) || 10,
          Number(functionInputs.max) || 100
        );
      
      case 'parseCurrencyString':
        return parseCurrencyString(String(functionInputs.currencyString) || '$123.45');
      
      case 'normalizeAmount':
        return normalizeAmount(
          Number(functionInputs.amount) || 123.456789,
          { decimalPlaces: Number(functionInputs.decimalPlaces) || 2 }
        );
      
      case 'parseFormattedCurrency':
        return parseFormattedCurrency(
          String(functionInputs.formattedString) || '$1,234.56',
          String(functionInputs.locale) || 'en-US'
        );
      
      // Additional Currency Conversion Functions
      case 'convertWithFee':
        return convertWithFee(
          Number(functionInputs.amount) || 100,
          Number(functionInputs.rate) || 0.85,
          Number(functionInputs.feePercentage) || 2.5
        );
      
      case 'bulkConvert':
        return bulkConvert(
          Array.isArray(functionInputs.amounts) ? functionInputs.amounts : [100, 200, 300],
          String(functionInputs.fromCurrency) || 'USD',
          String(functionInputs.toCurrency) || 'EUR',
          Number(functionInputs.rate) || 0.85
        );
      
      // Additional Arithmetic Operations
      case 'roundMoney':
        return roundMoney(Number(functionInputs.amount) || 123.456, Number(functionInputs.decimalPlaces) || 2);
      
      case 'addMoney':
        return addMoney(Number(functionInputs.amount1) || 100.50, Number(functionInputs.amount2) || 25.25);
      
      case 'subtractMoney':
        return subtractMoney(Number(functionInputs.amount1) || 100.50, Number(functionInputs.amount2) || 25.25);
      
      case 'multiplyMoney':
        return multiplyMoney(Number(functionInputs.amount) || 100.50, Number(functionInputs.multiplier) || 1.5);
      
      case 'divideMoney':
        return divideMoney(Number(functionInputs.amount) || 100.50, Number(functionInputs.divisor) || 2);
      
      case 'calculateCompoundInterest':
        return calculateCompoundInterest(
          Number(functionInputs.principal) || 1000,
          Number(functionInputs.rate) || 5,
          Number(functionInputs.time) || 2,
          Number(functionInputs.compoundsPerYear) || 4
        );
      
      case 'distributeProportionally':
        return distributeProportionally(
          Number(functionInputs.totalAmount) || 1000,
          Array.isArray(functionInputs.weights) ? functionInputs.weights : [1, 2, 3]
        );
      
      // Localization Functions
      case 'formatCurrencyByLocale':
        return formatCurrencyByLocale(
          Number(functionInputs.amount) || 1234.56,
          String(functionInputs.currency) || 'USD',
          String(functionInputs.locale) || 'en-US'
        );
      
      case 'getLocaleCurrencyInfo':
        return getLocaleCurrencyInfo(String(functionInputs.locale) || 'en-US');
      
      case 'formatWithGrouping':
        return formatWithGrouping(
          Number(functionInputs.amount) || 1234567.89,
          String(functionInputs.locale) || 'en-US'
        );
      
      case 'formatDecimalPlaces':
        return formatDecimalPlaces(
          Number(functionInputs.amount) || 123.456789,
          Number(functionInputs.decimalPlaces) || 2
        );
      
      // Loan & Credit Functions
      case 'calculateMonthlyPayment':
        return calculateMonthlyPayment(
          Number(functionInputs.principal) || 200000,
          Number(functionInputs.annualRate) || 4.5,
          Number(functionInputs.termYears) || 30
        );
      
      case 'calculateLoanBalance':
        return calculateLoanBalance(
          Number(functionInputs.principal) || 200000,
          Number(functionInputs.monthlyPayment) || 1013.37,
          Number(functionInputs.annualRate) || 4.5,
          Number(functionInputs.monthsPaid) || 12
        );
      
      case 'calculateTotalInterest':
        return calculateTotalInterest(
          Number(functionInputs.principal) || 200000,
          Number(functionInputs.monthlyPayment) || 1013.37,
          Number(functionInputs.termYears) || 30
        );
      
      case 'generateAmortizationSchedule':
        return generateAmortizationSchedule(
          Number(functionInputs.principal) || 100000,
          Number(functionInputs.annualRate) || 4.5,
          Number(functionInputs.termYears) || 30
        );
      
      case 'calculateCreditUtilization':
        return calculateCreditUtilization(
          Number(functionInputs.usedCredit) || 2500,
          Number(functionInputs.totalCredit) || 10000
        );
      
      case 'calculateMinimumPayment':
        return calculateMinimumPayment(
          Number(functionInputs.balance) || 5000,
          Number(functionInputs.annualRate) || 18.99,
          Number(functionInputs.minPercentage) || 2
        );
      
      case 'calculatePayoffTime':
        return calculatePayoffTime(
          Number(functionInputs.balance) || 5000,
          Number(functionInputs.monthlyPayment) || 200,
          Number(functionInputs.annualRate) || 18.99
        );
      
      // Investment & Returns Functions
      case 'calculateAnnualizedReturn':
        return calculateAnnualizedReturn(
          Number(functionInputs.initialValue) || 10000,
          Number(functionInputs.finalValue) || 12000,
          Number(functionInputs.years) || 2
        );
      
      case 'calculateDividendYield':
        return calculateDividendYield(
          Number(functionInputs.annualDividends) || 240,
          Number(functionInputs.stockPrice) || 80
        );
      
      case 'calculateFutureValue':
        return calculateFutureValue(
          Number(functionInputs.presentValue) || 10000,
          Number(functionInputs.annualRate) || 7,
          Number(functionInputs.years) || 10
        );
      
      // Subscription & Payments Functions - TODO: Fix type signatures
      case 'compareSubscriptionPlans':
      case 'calculateUpgradeCredit':
      case 'calculateAnnualEquivalent':
      case 'calculateNextPaymentDate':
      case 'calculateTotalRecurringCost':
        // Temporarily return placeholder for functions with complex types
        return { note: 'Function implementation pending - complex type signatures' };
      
      // Utility Functions
      case 'roundToNearestCent':
        return roundToNearestCent(Number(functionInputs.amount) || 123.456);
      
      case 'roundToBankersRounding':
        return roundToBankersRounding(Number(functionInputs.amount) || 123.455);
      
      case 'truncateToDecimalPlaces':
        return truncateToDecimalPlaces(
          Number(functionInputs.amount) || 123.456789,
          Number(functionInputs.decimalPlaces) || 2
        );
      
      case 'ceilToNearestCent':
        return ceilToNearestCent(Number(functionInputs.amount) || 123.451);
      
      case 'formatThousands':
        return formatThousands(Number(functionInputs.amount) || 1234567.89);
      
      case 'formatToHundreds':
        return formatToHundreds(Number(functionInputs.amount) || 123456.789);
      
      case 'removeFormattingFromNumber':
        return removeFormattingFromNumber(String(functionInputs.formattedNumber) || '1,234.56');
      
      case 'convertToWords':
        return convertToWords(Number(functionInputs.amount) || 1234.56);
      
      case 'formatAccountNumber':
        return formatAccountNumber(String(functionInputs.accountNumber) || '1234567890123456');
      
      default:
        return null;
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
};
