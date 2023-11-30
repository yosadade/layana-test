import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ILGuardian} from '../../../assets/ilustrations';
import Gap from '../../Gap';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const CardDetail = () => {
  return (
    <View style={styles.cardDetail}>
      <View style={styles.wrapperContent}>
        <Image source={ILGuardian} style={styles.imgCardDetail} />
        <Gap width={8} />
        <View>
          <Text>By: The Guardian Live</Text>
          <Gap height={4} />
          <Text>United Kingdom</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.btnCardDetail}>
        <Text style={styles.titleBtnCardDetail}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  cardDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blue2,
    width: '100%',
    padding: 16,
    borderRadius: 16,
  },
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgCardDetail: {
    width: 44,
    height: 44,
    borderRadius: 44,
  },
  btnCardDetail: {
    width: 80,
    height: 41,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBtnCardDetail: {
    fontSize: 14,
    fontFamily: fonts.primary[700],
    color: colors.blue,
  },
});
