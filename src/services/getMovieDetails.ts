import apiClient from '../config';
import {DEFAULT_POSTER_IMAGE} from '../utils/constants';
import {getImage} from '../utils/getImage';

export const getMovieDetails = async (id: number) => {
  try {
    const response = await apiClient.get(`/movie/${id}`);
    const movie = response.data;

    return {
      ...movie,
      posterUrl: movie.poster_path
        ? getImage('w500', movie.poster_path)
        : DEFAULT_POSTER_IMAGE,
    };
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
