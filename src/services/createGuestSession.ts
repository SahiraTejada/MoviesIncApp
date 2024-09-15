import apiClient from '../config';

export const createGuestSession = async () => {
  try {
    const response = await apiClient.get('/authentication/guest_session/new');
    const guestSessionId = response.data.guest_session_id;
    return guestSessionId;
  } catch (error) {
    console.error('Error creating guest session:', error);
    throw error;
  }
};
