import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Actor } from '../types/movie';
import { colors } from '../theme/colors';

const ActorDetails = ({name, character,photoUrl}:Actor) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: photoUrl}} style={styles.profileImage} />
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
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    borderWidth: 2,
    borderColor: '#FF0000', 
  },
  textContainer: {
    marginLeft: 10,
  },
  nameText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    color: colors.gray, 
    fontSize: 14,
  },
});

export default ActorDetails;
