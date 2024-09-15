import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { getMovieRecommendations } from '../services/getMovieRecommendations';
import Loader from './Loader';
import { useNavigation } from '@react-navigation/native';
import { MovieDetailsNavigationProp } from '../types/navigation';
import { getYearFromDate } from '../utils/date.utils';
import { colors } from '../theme/colors';

const MoviesRecommended = ({movieId}: {movieId: number}) => {
  const [movieRecommendation, setMovieRecommendation] = useState<any | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<MovieDetailsNavigationProp>();
   const handlePress = (selectedMovieId: number) => {
     navigation.navigate('MovieDetails', {
       movieId: selectedMovieId, 
     });
   };

  const fetchMovieInfo = async () => {
    setLoading(true);
    try {
      const movie = await getMovieRecommendations(movieId);
      setMovieRecommendation(movie);
    } catch (error) {
      console.error('Error fetching movie info:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  if (!movieRecommendation || loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movieRecommendation.map(movie => (
          <TouchableOpacity
            key={movie.id}
            onPress={() => handlePress(movie.id)}>
            <View style={styles.movieContainer}>
              <Image
                source={{uri: movie.posterUrl}}
                style={styles.movieImage}
              />
              <View style={styles.movieInfo}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <Text style={styles.movieYear}>
                  ({getYearFromDate(movie.release_date)})
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
    alignItems: 'center',
  },
  movieImage: {
    width: 150,
    height: 130,
    borderRadius: 10,
  },
  movieInfo:{
    display:'flex',
    alignItems:'flex-start',
    width:'100%',
  },
  movieTitle: {
    fontSize: 14,
    color: colors.white,
    marginTop: 5,
  },
  movieYear: {
    fontSize: 12,
    color: colors.gray,
  },
});

export default MoviesRecommended;
