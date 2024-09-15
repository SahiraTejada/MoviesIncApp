import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../theme/colors';
import {MovieDetailsNavigationProp} from '../types/navigation';
import {getYearFromDate} from '../utils/date.utils';
import {roundToFixed} from '../utils/number.utils';
import { MovieCardProps } from '../types/movie';

const MovieCard = ({
  movieId,
  title,
  rating,
  posterUrl,
  releaseDate,
}: MovieCardProps) => {
  const navigation = useNavigation<MovieDetailsNavigationProp>();

  const handlePress = () => {
    navigation.navigate('MovieDetails', {movieId});
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: posterUrl}} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.info}>
        <View style={styles.rating}>
          <IconAntDesign name="star" size={15} color={colors.yellow} />
          <Text style={styles.text}>{roundToFixed(rating)}</Text>
        </View>
        <IconEntypo name="dot-single" size={10} color={colors.white} />
        <Text style={styles.text}>{getYearFromDate(releaseDate)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  imageWrapper: {
    width: '100%',
    height: 230,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 3,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    color: colors.grayLigth,
    fontSize: 12,
    fontWeight: '400',
  },
});

export default MovieCard;
