import apiClient from '../config';

export const addMovieRating = async (movieId: number, rating: number) => {
  try {
    const response = await apiClient.post(
      `/movie/${movieId}/rating`,
      {value: rating},
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error adding movie rating:', error);
    throw error;
  }
};
