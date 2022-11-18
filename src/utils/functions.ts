export const formatToLocalePrice = (
  value: number,
  locale = 'pt-BR',
  currency = 'BRL',
) =>
  value.toLocaleString(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  });
