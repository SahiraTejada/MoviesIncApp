import apiClient from '../config';
import {DEFAULT_POSTER_IMAGE} from '../utils/constants';
import {getImage} from '../utils/getImage';

export const getMovieRecommendations = async (id: number) => {
  try {
    const response = await apiClient.get(`/movie/${id}/recommendations`);
    const recommendations = response.data.results;

    const moviesWithPosters = recommendations.map((movie: any) => ({
      ...movie,
      posterUrl: movie.poster_path
        ? getImage('w500', movie.poster_path)
        : DEFAULT_POSTER_IMAGE,
    }));

    return moviesWithPosters;
  } catch (error) {
    console.error('Error fetching movies recommendations:', error);
    throw error;
  }
};
