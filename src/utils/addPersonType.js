export const addPersonType = (data) => {
  return data.map((item) => {
    const obj = {
      ...item,
      species: item.species.length === 0 ? 'human' : item.species[0].name,
    };
    return obj;
  });
};
