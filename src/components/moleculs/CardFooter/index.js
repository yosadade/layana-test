import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICTicketActive} from '../../../assets/icons';
import {colors} from '../../../utils/colors';
import Gap from '../../Gap';
import {fonts} from '../../../utils/fonts';

const CardFooter = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titlePrice}>$14 / person</Text>
        <Gap height={4} />
        <Text style={styles.titleStatus}>Available Ticket</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.7}
        onPress={onPress}>
        <ICTicketActive />
        <Gap width={8} />
        <Text style={styles.titleBtn}>Get Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardFooter;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    backgroundColor: colors.navy,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBtn: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: colors.white,
  },
  titlePrice: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
  titleStatus: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.yellow1,
  },
});
