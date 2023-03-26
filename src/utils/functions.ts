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

export const formatOrderStatus = (status: string) => {
  switch (status) {
    case 'DONE':
      return '✅ Done!';
    case 'IN_PRODUCTION':
      return '👨‍🍳 In production';
    case 'WAITING':
      return '🕑 On queue';
  }
};

export const formatActionButtonMessage = (status: string) => {
  switch (status) {
    case 'IN_PRODUCTION':
      return '✅ Complete order';
    case 'WAITING':
      return '👨‍🍳 Start production';
  }
};
