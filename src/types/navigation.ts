import {StackNavigationProp} from '@react-navigation/stack';
import { Movie } from './movie';

export type RootStackParamList = {
  MovieList: undefined;
  MovieDetails: Movie
};


export type MovieDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MovieDetails'
>;
