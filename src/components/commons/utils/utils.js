export const getDate = (date) => {
  const sliceDate = String(date.slice(0, 10));
  return `${sliceDate}`;
};
