import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation';
import {colors} from '../theme/colors';

type MovieDetailsRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

const MovieDetails = () => {
  const route = useRoute<MovieDetailsRouteProp>();
  const {movieId, title, posterUrl, description, genre} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{uri: posterUrl}} style={styles.posterImage} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.subTitle}>Actors:</Text>
      <Text style={styles.subTitle}>Genre:</Text>
      <Text style={styles.infoText}>{genre}</Text>
      <Text style={styles.movieId}>Movie ID: {movieId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  posterImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  infoText: {
    color: colors.grayLigth,
    fontSize: 16,
    marginBottom: 10,
  },
  movieId: {
    color: colors.white,
    fontSize: 16,
  },
});

export default MovieDetails;
