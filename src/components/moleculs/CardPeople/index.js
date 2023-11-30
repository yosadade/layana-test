/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {ICArrowUp} from '../../../assets/icons';
import Gap from '../../Gap';
import {fonts} from '../../../utils/fonts';
import {dataPeopleEvent} from '../../../utils/datas';

const CardPeople = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Event Time</Text>
        <ICArrowUp />
      </View>
      <Gap height={4} />
      <Text style={styles.titleSee}>See all</Text>
      <Gap height={8} />
      <View style={styles.wrapperPeople}>
        {dataPeopleEvent.map((item, i) => {
          return (
            <Image
              key={i}
              source={item.img}
              style={{
                marginLeft: i === 0 ? 0 : -8,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CardPeople;

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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperPeople: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    left: 30,
    position: 'absolute',
  },
});
