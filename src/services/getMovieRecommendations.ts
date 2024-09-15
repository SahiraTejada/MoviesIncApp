import apiClient from '../config';
import {getImage} from '../utils/getImage';

export const getMovieRecommendations = async (id: number) => {
  try {
    const response = await apiClient.get(`/movie/${id}/recommendations`);
    const recommendations = response.data.results;

    const moviesWithPosters = recommendations.map((movie: any) => ({
      ...movie,
      posterUrl: movie.poster_path
        ? getImage('w500', movie.poster_path)
        : 'https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg',
    }));

    return moviesWithPosters;
  } catch (error) {
    console.error('Error fetching movies recommendations:', error);
    throw error;
  }
};
