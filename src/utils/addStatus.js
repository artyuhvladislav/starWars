export const addStatus = (data) => {
  return data.map((obj) => ({ ...obj, status: true }));
};
