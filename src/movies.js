export const getSmashystreamUrl = (tmdbID) =>{
    const URL = import.meta.env.VITE_MOVIES_API;
    return `${URL}/${tmdbID}`
}