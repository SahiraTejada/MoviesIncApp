import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {borders} from '../theme/borders';
import { Movie } from '../types/Movie';

interface MovieCardProps extends Movie {}

const MovieCard = ({title, rating, posterUrl, ReleaseDate}:MovieCardProps) => {
  return (
    <View style={styles.movieContainer}>
      <View>
        <Image
          source={{ uri: posterUrl }}
          style={styles.movieImage}
        />
        <View style={favoriteButton.circle}></View>
      </View>
      <Text style={styles.movieTitle}>{title}</Text>
      <Text style={styles.movieInfo}>{rating}  {ReleaseDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  movieInfo: {
    color: colors.grayLigth,
    fontSize: 12,
    fontWeight: '400',
    paddingTop: 8,
  },
  movieImage: {
    width: '100%',
    borderRadius: borders.radiusMedium,
    height: 158,
    marginBottom: 15,
  },
  movieTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
});

const favoriteButton = StyleSheet.create({
  circle: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: 'blue',
    position: 'absolute',
    opacity: 0.7,
    top: 10,
    right: 10,
  },
});
export default MovieCard;
