import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Actor} from '../types/movie';
import {colors} from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';

const ActorDetails = ({name, character, photoUrl}: Actor) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors.gradientPrimary}
        style={styles.gradientBorder}>
        <Image source={{uri: photoUrl}} style={styles.profileImage} />
      </LinearGradient>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.subText}>{character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  gradientBorder: {
    width: 54,
    height: 54,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 10,
  },
  nameText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'medium',
  },
  subText: {
    color: colors.gray,
    fontSize: 12,
  },
});

export default ActorDetails;
