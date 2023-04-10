export const addChecked = (data) => {
  return data.map((obj) => ({ ...obj, checked: false }));
};
