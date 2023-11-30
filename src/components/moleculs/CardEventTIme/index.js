import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import Gap from '../../Gap';
import {ICCalendarActive, ICClock} from '../../../assets/icons';

const CardEventTime = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Time</Text>
      <Gap height={8} />
      <View style={styles.wrapper}>
        <ICCalendarActive width="24" height="24" />
        <Gap width={8} />
        <Text style={styles.titleDate}>Monday, 13 November 2023</Text>
      </View>
      <Gap height={8} />
      <View style={styles.wrapper}>
        <ICClock width="24" height="24" />
        <Gap width={8} />
        <Text style={styles.titleDate}>Start at 08.00 PM</Text>
      </View>
    </View>
  );
};

export default CardEventTime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue2,
    width: '100%',
    padding: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleDate: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.grey3,
  },
});
