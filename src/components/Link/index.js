import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Link = ({onPress, title, style}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.title(style)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: style => ({
    fontSize: 14,
    color: colors.navy,
    fontFamily: fonts.primary[600],
    ...style,
  }),
});
