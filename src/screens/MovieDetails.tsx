/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import ActionButton from '../components/ActionButton';
import ActionsBottom from '../components/ActionsBottom';
import ActorDetails from '../components/ActorDetails';
import GenreButton from '../components/GenreButton';
import Loader from '../components/Loader';
import MoviesRecommended from '../components/MoviesRecommended';
import {getMovieCastDetails} from '../services/getMovieCastDetails';
import {getMovieDetails} from '../services/getMovieDetails';
import {colors} from '../theme/colors';
import {MovieDetailsRouteProp} from '../types/navigation';
import {formatDate} from '../utils/date.utils';
import {roundToFixed} from '../utils/number.utils';
import {Actor, Movie} from '../types/movie';

const MovieDetails = () => {
  const navigation = useNavigation();
  const route = useRoute<MovieDetailsRouteProp>();
  const {movieId} = route.params;

  const [isActionsVisible, setIsActionsVisible] = useState(false);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [cast, setCast] = useState<Actor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchMovieInfo = async () => {
    setIsLoading(true);
    try {
      const movieData = await getMovieDetails(movieId);
      const castData = await getMovieCastDetails(movieId);
      setMovie(movieData);
      setCast(castData);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieInfo();
  }, [movieId]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const toggleActions = () => {
    setIsActionsVisible(!isActionsVisible);
  };

  if (isLoading || !movie) {
    return <Loader />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.posterWrapper}>
        <ImageBackground
          style={styles.posterImage}
          source={{uri: movie.posterUrl}}>
          <LinearGradient
            colors={colors.gradientOverlay}
            locations={[0, 0.29, 0.64, 1]}
            style={styles.gradientOverlay}
          />
        </ImageBackground>
        <View style={styles.actionButtons}>
          <ActionButton
            height={50}
            width={50}
            onPress={handleBackPress}
            Icon={<IconAntDesign name="left" size={15} color={colors.white} />}
          />
          <ActionButton
            height={50}
            width={50}
            onPress={toggleActions}
            Icon={
              <IconEntypo
                name="dots-three-vertical"
                size={15}
                color={colors.white}
              />
            }
          />
        </View>
      </View>
      <ScrollView style={styles.detailsWrapper}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <View style={styles.ratingWrapper}>
          <View style={styles.ratingInfo}>
            <IconAntDesign name="star" size={15} color={colors.yellow} />
            <Text style={styles.ratingText}>
              {roundToFixed(movie.vote_average)}
            </Text>
          </View>
          <IconEntypo name="dot-single" size={10} color={colors.white} />
          <Text style={styles.releaseDateText}>
            {formatDate(movie.release_date)}
          </Text>
        </View>
        <View style={styles.separator} />
        <View>
          <Text style={styles.sectionTitle}>Genre</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.genreList}>
              {movie.genres?.map((genre: any, index: number) => (
                <GenreButton key={index} genre={genre.name} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.separator} />
        <View>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={[styles.descriptionText, {lineHeight: 20}]}>
            {movie.overview}
          </Text>
        </View>
        <View style={styles.separator} />
        <View>
          {cast.length > 0 && (
            <View>
              <Text style={styles.sectionTitle}>Cast</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.actorList}>
                  {cast.map((actor, index) => (
                    <ActorDetails
                      key={index}
                      name={actor.name}
                      character={actor.character}
                      profileUrl={actor.profileUrl}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
          )}
        </View>
        <View style={styles.separator} />
        <View>
          <Text style={styles.sectionTitle}>Recommended Movies</Text>
          <MoviesRecommended movieId={movieId} />
        </View>
      </ScrollView>
      {isActionsVisible && (
        <ActionsBottom
          handleOpen={toggleActions}
          movieId={movieId}
          fetchMovieInfo={fetchMovieInfo}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingBottom: 20},
  separator: {
    height: 1,
    backgroundColor: colors.grayDark,
    marginVertical: 20,
    opacity: 0.4,
  },
  movieTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'medium',
    marginBottom: 10,
  },
  genreList: {
    flexDirection: 'row',
    gap: 10,
  },
  posterWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  detailsWrapper: {
    paddingHorizontal: 20,
  },
  actionButtons: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 9,
    paddingTop: 20,
  },
  gradientOverlay: {
    height: '100%',
    width: '100%',
  },
  posterImage: {
    width: '100%',
    height: 345,
    resizeMode: 'cover',
  },
  descriptionText: {
    color: colors.gray,
    fontSize: 14,
    marginBottom: 10,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'medium',
    marginBottom: 10,
  },
  ratingText: {
    color: colors.grayLigth,
    fontSize: 16,
  },
  releaseDateText: {
    color: colors.grayLigth,
    fontSize: 16,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ratingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  actorList: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default MovieDetails;
