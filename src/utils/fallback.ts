// Fallback implementations for demo purposes
export const formatCurrency = (amount: number, currency: string) => {
  return {
    formatted: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount),
    amount,
    currency,
  };
};

export const convertCurrency = (amount: number, from: string, to: string, rate: number) => {
  return {
    amount: amount * rate,
    fromCurrency: from,
    toCurrency: to,
    rate,
  };
};

export const calculateTip = (amount: number, percentage: number) => {
  return amount * (percentage / 100);
};
