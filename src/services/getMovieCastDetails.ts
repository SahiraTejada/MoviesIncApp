import apiClient from '../config';
import { DEFAULT_PROFILE_IMAGE } from '../constants/images';
import { getImage} from '../utils/getImage';


export const getMovieCastDetails = async (id: number) => {
  try {
    const response = await apiClient.get(`/movie/${id}/credits`);
    const cast = response.data.cast;

    return cast.map((member: any) => ({
      ...member,
      profileUrl: member.profile_path
        ? getImage('w500', member.profile_path)
        : DEFAULT_PROFILE_IMAGE,
    }));
  } catch (error) {
    console.error('Error fetching movie cast details:', error);
    throw error;
  }
};
