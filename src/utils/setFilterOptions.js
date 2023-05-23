export const setFilterOptions = (data) => {
  const filterDataOptions = {
    homeWorld: { active: null, allItems: ['homeWorld'] },
    species: { active: null, allItems: ['species'] },
    status: { active: null, allItems: ['status', 'active', 'disable'] },
  };
  data.forEach((item) => {
    filterDataOptions.homeWorld.allItems.push(item.homeworld.name);
    filterDataOptions.species.allItems.push(item.species);
  });

  filterDataOptions.homeWorld.allItems = Array.from(new Set(filterDataOptions.homeWorld.allItems));
  filterDataOptions.species.allItems = Array.from(new Set(filterDataOptions.species.allItems));

  return filterDataOptions;
};
