const handleFetch = async (data) => {
  if (data instanceof Array) {
    const dataJson = data.map(async (url) => {
      const res = await fetch(url);
      return await res.json();
    });

    return dataJson;
  }

  const resultJson = await fetch(data);
  return await resultJson.json();
};

export const fetchPeople = async (page, searchParam = '') => {
  const url = `https://swapi.dev/api/people/?page=${page}&search=${searchParam}`;
  const peopleJson = await fetch(url);
  const people = await peopleJson.json();

  let vehicles = [],
    starships = [],
    species = [];

  const detailsData = people.results.map(async (i) => {
    const homeworld = await handleFetch(i.homeworld);
    const vehiclesJson = await handleFetch(i.vehicles);
    const starshipsJson = await handleFetch(i.starships);
    const speciesJson = await handleFetch(i.species);

    vehicles = await Promise.all(vehiclesJson);
    starships = await Promise.all(starshipsJson);
    species = await Promise.all(speciesJson);

    // vehicles = vehiclesJson;
    // starships = starshipsJson;
    // species = speciesJson;

    return {
      name: i.name,
      birth: i.birth_year,
      homeworld,
      vehicles,
      starships,
      species,
    };
  });
  return Promise.all(detailsData);
};
