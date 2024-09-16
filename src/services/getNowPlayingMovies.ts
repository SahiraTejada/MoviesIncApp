import apiClient from '../config';
import {DEFAULT_POSTER_IMAGE} from '../constants/images';
import {getImage} from '../utils/getImage';

export const getNowPlayingMovies = async () => {
  try {
    const response = await apiClient.get('/movie/now_playing');
    const movies = response.data.results;

    const updatedMovies = movies.map((movie: any) => ({
      ...movie,
      posterUrl: movie.poster_path
        ? getImage('w500', movie.poster_path)
        : DEFAULT_POSTER_IMAGE,
    }));

    return updatedMovies;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    throw error;
  }
};
