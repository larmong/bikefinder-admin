export const getDate = (date) => {
  const sliceDate = String(date.slice(0, 10));
  return `${sliceDate}`;
};

export const getPrice = (price) => {
  const newPrice = price.toLocaleString("ko-KR");
  return `${newPrice}`;
};
