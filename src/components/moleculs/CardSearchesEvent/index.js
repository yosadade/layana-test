import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {ICCalendarActive, ICSmile} from '../../../assets/icons';
import Gap from '../../Gap';

const CardSearchesEvent = ({img, title, date, attended}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Image source={img} style={styles.img} />
      <View style={styles.wrapperContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.wrapper}>
          <ICCalendarActive width="16" height="16" />
          <Gap width={8} />
          <Text style={styles.titleDate}>{date}</Text>
        </View>
        <Gap height={6} />
        <View style={styles.wrapper}>
          <ICSmile color="#94A3B8" width="16" height="16" />
          <Gap width={8} />
          <Text style={styles.titleDate}>{attended}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardSearchesEvent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    elevation: 1,
    borderRadius: 16,
    width: '100%',
    height: 124,
    padding: 12,
    marginBottom: 16,
    flexDirection: 'row',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
  wrapperContent: {
    width: 203,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleDate: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.grey3,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.grey3,
  },
});
