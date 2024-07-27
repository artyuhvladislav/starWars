export const rateTeam = ({ passAccuracy, points }) => {
  let rating = (passAccuracy + points) / 2;
  return rating;
};


