import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import MovieCard from '../components/MovieCard';
import {createGuestSession} from '../services/createGuestSession';
import {getNowPlayingMovies} from '../services/getNowPlayingMovies';
import {colors} from '../theme/colors';
import {Movie} from '../types/movie';

const MovieList: React.FC = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getNowPlayingMovies();
        setNowPlayingMovies(movies);
        const sessionId = await createGuestSession();
        await AsyncStorage.setItem('sessionId', sessionId);
      } catch (fetchError) {
        setError('Failed to fetch now playing movies');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({item}: {item: Movie}) => (
    <MovieCard
      movieId={item.id}
      title={item.title}
      rating={item.vote_average}
      posterUrl={item.posterUrl}
      releaseDate={item.release_date}
    />
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }
  if (nowPlayingMovies.length === 0) {
    return <Text style={styles.noMoviesText}>No movies available</Text>;
  }

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
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 30,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '500',
  },
  errorText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  noMoviesText: {
    color: colors.grayLigth,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MovieList;
