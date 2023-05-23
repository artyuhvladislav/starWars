export const filterTableData = (data, filterOptions) => {
  const initialOption =
    filterOptions.homeWorld.active || filterOptions.species.active || filterOptions.status.active;
  if (initialOption === null) {
    return data;
  }

  return data.filter((item) => {
    const homeWorldFilter =
      filterOptions.homeWorld.active?.toLowerCase() === item.homeworld.name.toLowerCase();
    const speciesFilter =
      filterOptions.species.active?.toLowerCase() === item.species.toLowerCase();
    const statusFilter =
      filterOptions.status.active?.toLowerCase() ===
      (item.status ? 'active' : 'disable').toLocaleLowerCase();

    if (
      filterOptions.homeWorld.active &&
      filterOptions.species.active &&
      filterOptions.status.active
    ) {
      return homeWorldFilter && speciesFilter && statusFilter;
    }

    if (filterOptions.homeWorld.active && filterOptions.species.active) {
      return homeWorldFilter && speciesFilter;
    }

    if (filterOptions.species.active && filterOptions.status.active) {
      return speciesFilter && statusFilter;
    }

    if (filterOptions.homeWorld.active && filterOptions.status.active) {
      return homeWorldFilter && statusFilter;
    }

    if (filterOptions.filteredFieldName === 'homeWorld') {
      return homeWorldFilter;
    }

    if (filterOptions.filteredFieldName === 'species') {
      return speciesFilter;
    }

    if (filterOptions.filteredFieldName === 'status') {
      return statusFilter;
    }
  });
};
