import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Actor} from '../types/movie';
import {colors} from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';

const ActorDetails = ({name, character, profileUrl: photoUrl}: Actor) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors.gradientPrimary}
        style={styles.gradientWrapper}>
        <Image source={{uri: photoUrl}} style={styles.image} />
      </LinearGradient>
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.character}>{character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  gradientWrapper: {
    width: 54,
    height: 54,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 50,
  },
  textWrapper: {
    marginLeft: 10,
  },
  name: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  character: {
    color: colors.gray,
    fontSize: 12,
  },
});

export default ActorDetails;
