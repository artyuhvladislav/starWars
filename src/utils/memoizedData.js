const cache = new Map();

export const memoizedData = (data, searchParam) => {
  if (cache.has(`data+${searchParam}`)) {
    return cache.get(`data+${searchParam}`);
  }
  cache.set(`data+${searchParam}`, data);
  return data;
};

console.log({ cache });
