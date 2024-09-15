import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ActionButtonProps } from '../types/action-button';
import { colors } from '../theme/colors';

const ActionButton = ({
  onPress,
  width = 50,
  height = 50,
  Icon,
}: ActionButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonStyle, {width, height, borderRadius: width / 2}]}
        onPress={onPress}>
        {Icon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.overlayColor1,
  },
});


export default ActionButton;
