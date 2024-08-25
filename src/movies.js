export const getSmashystreamUrl = (tmdbID) => {
  const URL = import.meta.env.VITE_MOVIES_URL;
  return `${URL}${tmdbID}`;
};
