import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  MovieList: undefined;
  MovieDetails: {
    movieId: number;
    title: string;
    posterUrl: string;
    description: string;
    actors: string[];
    genre: string;
  };
};


export type MovieDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MovieDetails'
>;
