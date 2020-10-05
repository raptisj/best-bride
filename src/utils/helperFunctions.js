export const sortCategories = (data) => {
  return [...data].sort(function (a, b) {
    if (a.position < b.position) {
      return -1;
    }
    if (a.position > b.position) {
      return 1;
    }
    return 0;
  });
};

export const centsToEuro = (cents) => {
  let newFormat = cents / 100;
  return (newFormat = newFormat.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  }));
};
