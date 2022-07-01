const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
}); // https://www.youtube.com/watch?v=lATafp15HWA @ 24:33 ( to know what this is )

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};
