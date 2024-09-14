import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
    Button,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../types/navigation';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

type MovieDetailsRouteProp = RouteProp<RootStackParamList, 'MovieDetails'>;

const MovieDetails = () => {
  const navigation = useNavigation();

  const route = useRoute<MovieDetailsRouteProp>();
  const {movieId, title, posterUrl, description, genre} = route.params;
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
            style={styles.gradient}></LinearGradient>
        </ImageBackground>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.subTitle}>Actors:</Text>
      <Text style={styles.subTitle}>Genre:</Text>
      <Text style={styles.infoText}>{genre}</Text>
      <Text style={styles.movieId}>Movie ID: {movieId}</Text>
      <Button title="Go Back" onPress={handleGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  posterContainer: {
   
    position: 'relative',
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
    fontWeight: 'bold',
    marginVertical: 5,
  },
  infoText: {
    color: colors.grayLigth,
    fontSize: 16,
    marginBottom: 10,
  },
  movieId: {
    color: colors.white,
    fontSize: 16,
  },
});

export default MovieDetails;
