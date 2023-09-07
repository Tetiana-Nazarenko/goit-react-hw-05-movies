import axios from 'axios';

const API_KEY = '72086738e7bb8e219c22decaf43c8ba3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
};

export const getQueryMovies = async query => {
  try {
    const response = await axios.get(
      `/search/movie?query=${query}&api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
};

export const getMoviesDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
};

export const getMoviesCast = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
};

export const getMoviesReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
    );
    return response.data;
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
};
