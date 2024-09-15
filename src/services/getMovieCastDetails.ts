import apiClient from '../config';
import {getImage} from '../utils/getImage';

export const getMovieCastDetails = async (id: number) => {
  try {
    const response = await apiClient.get(`/movie/${id}/credits`);
    const cast = response.data.cast;

    return cast.map((member: any) => ({
      ...member,
      profileUrl: getImage('w500', member.profile_path),
    }));
  } catch (error) {
    console.error('Error fetching movie cast details:', error);
    throw error;
  }
};
