import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  MovieList: undefined;
  MovieDetails: {
    movieId:number
  }
};

export type MovieDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MovieDetails'
>;


export type MovieDetailsRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;
