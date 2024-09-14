import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import MovieCard from '../components/MovieCard';
import {Movie} from '../types/movie';
import {mockMovies} from '../data/mockMovies';

const MovieList = () => {
  const renderItem = ({item}: {item: Movie}) => (
    <MovieCard
      movieId={item.movieId}
      title={item.title}
      rating={item.rating}
      posterUrl={item.posterUrl}
      ReleaseDate={item.ReleaseDate}
       actors={item.actors}
       description={item.description}
       genre={item.genre}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now playing</Text>
      <FlatList
        data={mockMovies}
        renderItem={renderItem}
        keyExtractor={item => item.movieId.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 30,
    display: 'flex',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'medium',
  },
});
export default MovieList;
