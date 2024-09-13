import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import MovieCard from '../components/MovieCard';
import {Movie} from '../types/Movie';
import {mockMovies} from '../data/mockMovies';

const MovieList = () => {
  const renderItem = ({item}: {item: Movie}) => (
    <MovieCard
      title={item.title}
      rating={item.rating}
      posterUrl={item.posterUrl}
      ReleaseDate={item.ReleaseDate}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now playing</Text>
      <FlatList
        data={mockMovies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 30,
    display: 'flex',
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'medium',
  },
});
export default MovieList;
