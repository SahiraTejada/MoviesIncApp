import apiClient from '../config';
import {getImage} from '../utils/getImage';

export const getNowPlayingMovies = async () => {
  try {
    const response = await apiClient.get('/movie/now_playing');
    const movies = response.data.results;

    const updatedMovies = movies.map((movie: any) => ({
      ...movie,
      posterUrl: getImage('w500', movie.poster_path),
    }));

    return updatedMovies;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    throw error;
  }
};
