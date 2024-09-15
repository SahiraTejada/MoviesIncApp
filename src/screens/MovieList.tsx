import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Loader from '../components/Loader';
import MovieCard from '../components/MovieCard';
import { createGuestSession } from '../services/createGuestSession';
import { getNowPlayingMovies } from '../services/getNowPlayingMovies';
import { colors } from '../theme/colors';
import { Movie } from '../types/movie';

const MovieList = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchMovies = async () => {
    try {
      const movies = await getNowPlayingMovies();
      setNowPlayingMovies(movies);
    } catch (error) {
      setError('Failed to fetch now playing movies');
    } finally {
      setLoading(false);
    }
  };
  const fetchSessionId = async () => {
    try {
      const response = await createGuestSession();
      const id = response;
      await AsyncStorage.setItem('sessionId', id);
    } catch (error) {
      console.error('Error fetching sessionId:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchSessionId();
  }, []);

  if (loading) return <Loader />;
  if (error) return <Text>{error}</Text>;

  const renderItem = ({item}: {item: Movie}) => (
    <MovieCard
      movieId={item.id}
      title={item.title}
      rating={item.vote_average}
      posterUrl={item.posterUrl}
      releaseDate={item.release_date}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now playing</Text>
      <FlatList
        data={nowPlayingMovies}
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
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'medium',
  },
});
export default MovieList;
