import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import ActionButton from '../components/ActionButton';
import {colors} from '../theme/colors';
import {RootStackParamList} from '../types/navigation';
import {borders} from '../theme/borders';

type MovieDetailsRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

const MovieDetails = () => {
  const navigation = useNavigation();
  const route = useRoute<MovieDetailsRouteProp>();
  const {
    movieId,
    title,
    posterUrl,
    description,
    genre, // Suponemos que genre es un array de cadenas
    rating,
    actors,
    releaseDate,
  } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.posterContainer}>
        <ImageBackground style={styles.posterImage} source={{uri: posterUrl}}>
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
            onPress={handleGoBack}
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
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.ratingContent}>
            <IconAntDesign name="star" size={15} color={colors.yellow} />
            <Text style={styles.infoText}>{rating}</Text>
          </View>
          <Text style={styles.infoText}>{releaseDate}</Text>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.subTitle}>Genre</Text>
          <View style={styles.genreContainer}>
            {genre.map((g, index) => (
              <View key={index} style={styles.genreContent}>
                <Text style={styles.genreText}>{g}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.subTitle}>Description</Text>
          <Text style={styles.genreText}>{description}</Text>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.subTitle}>Cast</Text>
          <View style={styles.genreContainer}>
            {genre.map((g, index) => (
              <View key={index} style={styles.genreContent}>
                <Text style={styles.genreText}>{g}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  line: {
    height: 1,
    backgroundColor: '#515151',
    marginVertical: 28,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'medium',
    marginBottom: 10,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  genreContent: {
    backgroundColor: '#201F28',
    borderRadius: borders.radiusLarge,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  genreText: {
    color: colors.gray,
    fontSize: 14,
  },
  infoText: {
    color: colors.grayLigth,
    fontSize: 16,
  },
  movieId: {
    color: colors.white,
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
    gap: 20,
  },
});

export default MovieDetails;
