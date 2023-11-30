import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {ICCalendar, ICMapPoint} from '../../../assets/icons';
import Gap from '../../Gap';

const CardUpcomingEvent = ({
  img,
  status,
  title,
  location,
  date,
  time,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <Image source={img} style={styles.img} />
      <View>
        <Text style={styles.titleStatus}>{status}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.wrapper}>
          <ICMapPoint width="16" height="16" />
          <Gap width={8} />
          <Text style={styles.titleLocation}>{location}</Text>
        </View>
        <Gap height={2} />
        <View style={styles.wrapper}>
          <View style={styles.wrapper}>
            <ICCalendar width="16" height="16" />
            <Gap width={8} />
            <Text style={styles.titleLocation}>{date}</Text>
          </View>
          <Gap width={8} />

          <View style={styles.wrapper}>
            <View style={styles.dot} />
            <Gap width={8} />
            <Text style={styles.titleLocation}>Start at {time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardUpcomingEvent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.navy4,
    padding: 16,
    borderRadius: 16,
    width: 310,
    height: 122,
    marginLeft: 18,
    flexDirection: 'row',
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  titleStatus: {
    fontSize: 10,
    marginBottom: 4,
    fontFamily: fonts.primary[400],
    color: colors.yellow1,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleLocation: {
    fontSize: 12,
    marginBottom: 4,
    fontFamily: fonts.primary[400],
    color: colors.white,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
});
