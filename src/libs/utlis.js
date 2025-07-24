export const currencyFormatter = (number, currency = "USD") => {
  const formatter = new Intl.NumberFormat("es-US", {
    style: "currency",
    currency,
  });

  return formatter.format(number);
};
