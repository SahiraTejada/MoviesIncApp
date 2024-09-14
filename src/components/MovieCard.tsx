import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../theme/colors';
import {borders} from '../theme/borders';
import {Movie} from '../types/movie';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {MovieDetailsNavigationProp} from '../types/navigation';

interface MovieCardProps extends Movie {}

const MovieCard = ({
  movieId,
  title,
  rating,
  posterUrl,
  releaseDate: ReleaseDate,
  description,
  actors,
  genre,
}: MovieCardProps) => {
  const navigation = useNavigation<MovieDetailsNavigationProp>();

  const handlePress = () => {
    navigation.navigate('MovieDetails', {
      movieId,
      title,
      posterUrl,
      description,
      actors,
      genre,
      rating,
      releaseDate: ReleaseDate,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.movieContainer}>
      <View style={styles.movieContainer}>
        <View>
          <Image source={{uri: posterUrl}} style={styles.movieImage} />
          {/* Add this feature  (add favorite) later
         <TouchableOpacity   style={favoriteButton.circle}>
          <IconAntDesign name="hearto" size={20} color={colors.white} />
        </TouchableOpacity > */}
        </View>
        <Text style={styles.movieTitle}>{title}</Text>
        <View style={info.container}>
          <View style={info.ratingContent}>
            <IconAntDesign name="star" size={15} color={colors.yellow} />
            <Text style={info.text}>{rating}</Text>
          </View>
          <IconEntypo name="dot-single" size={10} color={colors.white} />
          <Text style={info.text}>{ReleaseDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  movieImage: {
    width: '100%',
    borderRadius: borders.radiusMedium,
    height: 158,
    marginBottom: 10,
  },
  movieTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
});

/* const favoriteButton = StyleSheet.create({
  circle: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: colors.graySoft,
    position: 'absolute',
    opacity: 0.7,
    top: 10,
    right: 10,
  },
}); */

const info = StyleSheet.create({
  text: {
    color: colors.grayLigth,
    fontSize: 12,
    fontWeight: '400',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 3,
  },
  ratingContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
});
export default MovieCard;
