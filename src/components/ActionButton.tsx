import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ActionButtonProps } from '../types/action-button';

const ActionButton = ({
  onPress,
  width = 50,
  height = 50,
  Icon,
}: ActionButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, {width, height, borderRadius: width / 2}]}
        onPress={onPress}>
        {Icon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 26, 29, 0.8)',
  },
});

export default ActionButton;
