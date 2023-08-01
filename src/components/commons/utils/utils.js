export const getDate = (date) => {
  const sliceDate = String(date.slice(0, 10));
  return `${sliceDate}`;
};

export const getPrice = (price) => {
  const newPrice = price.toLocaleString("ko-KR");
  return `${newPrice}`;
};

export const getPhone = (phoneNum) => {
  const first = phoneNum.slice(0, 3);
  const second = phoneNum.slice(3, 7);
  const third = phoneNum.slice(7, 11);

  return `${first}-${second}-${third}`;
};
