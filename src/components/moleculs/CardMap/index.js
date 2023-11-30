import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  ICAltArrowDown,
  ICAltArrowUp,
  ICMapPointActive,
} from '../../../assets/icons';
import Gap from '../../Gap';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';
import {ILMap} from '../../../assets/ilustrations';

const CardMap = () => {
  const [isShow, setIsShow] = useState(true);
  const onHandleShowMap = () => {
    setIsShow(!isShow);
  };
  return (
    <View style={styles.container}>
      <View style={styles.cardMap}>
        <View style={styles.wrapperContent}>
          <ICMapPointActive width="24" height="24" />
          <Gap width={8} />
          <View>
            <Text style={styles.title}>Troxy</Text>
            <Gap height={4} />
            <Text style={styles.titleLoc}>
              490 Commercial Road London E1 0HX United Kingdom
            </Text>
            <Gap height={4} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onHandleShowMap}
              style={styles.btn}>
              <Text style={styles.titleHide}>Hide Map</Text>
              <Gap width={4} />
              {isShow ? <ICAltArrowUp /> : <ICAltArrowDown />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isShow && <Image source={ILMap} style={styles.map} />}
    </View>
  );
};

export default CardMap;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue2,
    width: '100%',
    padding: 16,
    borderRadius: 16,
  },
  cardMap: {
    flexDirection: 'row',
  },
  wrapperContent: {
    flexDirection: 'row',
    marginRight: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
  titleLoc: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.grey3,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHide: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.blue,
  },
  map: {
    width: '100%',
    height: 175,
    borderRadius: 8,
  },
});
