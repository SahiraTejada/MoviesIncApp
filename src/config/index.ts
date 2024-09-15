import axios from 'axios';
import {API_KEY} from '@env';

const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {api_key: API_KEY},
});

export default apiClient;
