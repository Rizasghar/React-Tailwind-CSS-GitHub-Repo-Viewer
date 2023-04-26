export const addK = (num) =>
  num >= 1000 ? (num / 1000).toFixed(2) + "k" : num;
export const removeShaFromUrl = (url) => url.replace(/{\/sha}/, "");
