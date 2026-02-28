const THOUSANDS_SEPARATOR = /\B(?=(\d{3})+(?!\d))/g;

export const formatNumber = (x?: string | number) => {
  if (x == null || x === '') return '';
  return x.toString().replace(THOUSANDS_SEPARATOR, ',');
};

export const formatPrice = (x?: string | number) => {
  if (x == null || x === '') return '';
  const numArr = Number(x).toFixed(1).split('.');
  numArr[0] = numArr[0].replace(THOUSANDS_SEPARATOR, ',');
  return numArr.join('.');
};
