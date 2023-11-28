import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54,
    borderRadius: 8,
    backgroundColor: colors.navy,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
});
