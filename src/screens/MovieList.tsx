import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now playing</Text>
      <MovieCard />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 30,
    display:'flex',
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'medium',
  },
});
export default MovieList;
