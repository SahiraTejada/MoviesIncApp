/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {getMovieRecommendations} from '../services/getMovieRecommendations';
import Loader from './Loader';
import {useNavigation} from '@react-navigation/native';
import {MovieDetailsNavigationProp} from '../types/navigation';
import {getYearFromDate} from '../utils/date.utils';
import {colors} from '../theme/colors';
import {Movie} from '../types/movie';

const MoviesRecommended = ({movieId}: {movieId: number}) => {
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[] | null>(
    null,
  );

  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<MovieDetailsNavigationProp>();
  const handlePress = (selectedMovieId: number) => {
    navigation.navigate('MovieDetails', {
      movieId: selectedMovieId,
    });
  };

  const fetchRecommendedMovies = async () => {
    setLoading(true);
    try {
      const movies = await getMovieRecommendations(movieId);
      setRecommendedMovies(movies);
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendedMovies();
  }, []);

  if (loading || !recommendedMovies) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recommendedMovies.map(movie => (
          <TouchableOpacity
            key={movie.id}
            onPress={() => handlePress(movie.id)}>
            <View style={styles.movieContainer}>
              <Image
                source={{uri: movie.posterUrl}}
                style={styles.movieImage}
              />
              <View style={styles.movieInfo}>
                <Text style={[styles.movieTitle,styles.movietext]}>
                  {movie.title}  <Text style={styles.movieYear}>
                    ({getYearFromDate(movie.release_date)})
                  </Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  movieContainer: {
    marginRight: 15,
    alignItems: 'flex-start',
    width: 150,
  },
  movieImage: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  movieInfo: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 5,
  },
  movietext: {
    lineHeight: 22,
    overflow: 'hidden',
    maxHeight: 44,
  },
  movieTitle: {
    fontSize: 14,
    color: colors.white,
  },
  movieYear: {
    fontSize: 12,
    color: colors.gray,
  },
});

export default MoviesRecommended;
