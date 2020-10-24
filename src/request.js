const API_KEY = 'aea0af981387a486a594c3eb18ad3f11';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};
