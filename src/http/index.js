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

export const fetchPeople = async (page) => {
  const peopleJson = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  const people = await peopleJson.json();

  let vehicles = [],
    starships = [];

  const detailsData = people.results.map(async (i) => {
    const homeworld = await handleFetch(i.homeworld);
    const vehiclesJson = await handleFetch(i.vehicles);
    const starshipsJson = await handleFetch(i.starships);

    // const vehiclesJson = i.vehicles.map(async (url) => {
    //     const res = await fetch(url)
    //     return await res.json()
    // })

    // const starshipsJson = i.starships.map(async (url) => {
    //     const res = await fetch(url)
    //     return await res.json()
    // })

    vehicles = await Promise.all(vehiclesJson);
    starships = await Promise.all(starshipsJson);

    // vehicles = vehiclesJson
    // starships = starshipsJson

    return {
      name: i.name,
      birth: i.birth_year,
      homeworld,
      vehicles,
      starships,
    };
  });
  return Promise.all(detailsData);
};
