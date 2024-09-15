import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import ActionButton from '../components/ActionButton';
import ActorDetails from '../components/ActorDetails';
import ActionsBottom from '../components/ActionsBottom';
import GradientButton from '../components/GenreButton';
import {colors} from '../theme/colors';
import {RootStackParamList} from '../types/navigation';
import {getMovieDetails} from '../services/getMovieDetails';
import {getMovieCastDetails} from '../services/getMovieCastDetails';
import {formatDate} from '../utils/date.utils';
import {roundToFixed} from '../utils/number.utils';

type MovieDetailsRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

const MovieDetails = () => {
  const navigation = useNavigation();
  const route = useRoute<MovieDetailsRouteProp>();
  const {movieId} = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState<any | null>(null);
  const [movieCastDetails, setMovieCastDetails] = useState<any[]>([]);

  const handleActions = () => {
    setIsActionsOpen(!isActionsOpen);
  };

  const fetchMovieInfo = async (movieId: number) => {
    try {
      const movie = await getMovieDetails(movieId);
      setMovieDetails(movie);
      const cast = await getMovieCastDetails(movieId);
      setMovieCastDetails(cast);
    } catch (error) {
      console.error('Error fetching movie info:', error);
    }
  };

  useEffect(() => {
    fetchMovieInfo(movieId);
  }, [movieId]);
  if (!movieDetails) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.posterContainer}>
        <ImageBackground
          style={styles.posterImage}
          source={{uri: movieDetails.posterUrl}}>
          <LinearGradient
            colors={[
              'rgba(0,0,0,0.3)',
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0)',
              'rgba(0,0,0,0.8)',
            ]}
            locations={[0, 0.29, 0.64, 1]}
            style={styles.gradient}
          />
        </ImageBackground>
        <View style={styles.actionButton}>
          <ActionButton
            height={50}
            width={50}
            onPress={handleGoBack}
            Icon={<IconAntDesign name="left" size={15} color={colors.white} />}
          />
          <ActionButton
            height={50}
            width={50}
            onPress={handleActions}
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
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movieDetails.title}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.ratingContent}>
            <IconAntDesign name="star" size={15} color={colors.yellow} />
            <Text style={styles.infoText}>
              {roundToFixed(movieDetails.vote_average)}
            </Text>
          </View>
          <IconEntypo name="dot-single" size={10} color={colors.white} />
          <Text style={styles.infoText}>
            {formatDate(movieDetails.release_date)}
          </Text>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.subTitle}>Genre</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.genreContainer}>
              {movieDetails.genres?.map((g: any, index: number) => (
                <GradientButton key={index} genre={g.name} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.subTitle}>Description</Text>
          <Text style={styles.text}>{movieDetails.overview}</Text>
        </View>
        <View style={styles.line} />
        <View>
          {movieCastDetails.length > 0 && (
            <View style={styles.subTitle}>
              <Text style={styles.subTitle}>Cast</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.genreContainer}>
                  {movieCastDetails.map((castMember, index) => (
                    <ActorDetails
                      key={index}
                      name={castMember.name}
                      character={castMember.character}
                      photoUrl={castMember.profileUrl}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
          )}
        </View>
      </View>
      {isActionsOpen && (
        <ActionsBottom handleOpen={handleActions} movieId={movieId} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.black},
  line: {
    height: 1,
    backgroundColor: '#515151',
    marginVertical: 20,
    opacity: 0.4,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'medium',
    marginBottom: 10,
  },
  genreContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  posterContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  actionButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 9,
    paddingTop: 20,
  },
  gradient: {
    height: '100%',
    width: '100%',
  },
  posterImage: {
    width: '100%',
    height: 345,
    resizeMode: 'cover',
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
    fontWeight: 'medium',
    marginBottom: 10,
  },
  text: {
    color: colors.gray,
    fontSize: 14,
  },
  infoText: {
    color: colors.grayLigth,
    fontSize: 16,
  },
  ratingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default MovieDetails;
