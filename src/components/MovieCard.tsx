import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {borders} from '../theme/borders';

const MovieCard = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://via.placeholder.com/150',
        }}
        style={styles.movieImage}
      />
      <Text style={styles.movieTitle}>Star Wars: The Rise of Skywalker </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  movieImage: {
    width: '100%',
    borderRadius: borders.radiusMedium,
    height: 158,
    marginBottom:15,
  },
  movieTitle: {
    color: colors.white,
    fontSize:14,
    fontWeight:'500',
  },
});
export default MovieCard;
