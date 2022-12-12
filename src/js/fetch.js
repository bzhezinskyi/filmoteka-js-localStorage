import axios from 'axios';

const key = '9e8b55203cd36bc26921f9fe565ad09d';
const fetch = `https://api.themoviedb.org/3/movie/76341?api_key=${key}`;

export default function movis() {
  const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`;
  return axios.get(URL);
}
