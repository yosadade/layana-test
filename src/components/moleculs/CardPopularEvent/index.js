import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ILBanner1} from '../../../assets/ilustrations';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';
import {ICCalendarActive, ICMapPointActive} from '../../../assets/icons';
import Gap from '../../Gap';
import {dataPopularEvent} from '../../../utils/datas';

const CardPopularEvent = ({onPress}) => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dataPopularEvent.map((item, i) => {
          return (
            <TouchableOpacity
              onPress={onPress}
              onPressOut={() => setIsSelected(i)}
              activeOpacity={0.7}
              style={styles.container}
              key={i}>
              <Image source={ILBanner1} style={styles.img} />
              <Text style={styles.title}>
                Football Weekly Live Tour: London
              </Text>
              <View style={styles.wrapper}>
                <View style={styles.wrapper}>
                  <ICCalendarActive width="16" height="16" />
                  <Gap width={8} />
                  <Text style={styles.titleDate}>Nov 13, 2023</Text>
                </View>
                <View style={styles.dot} />
                <View style={styles.wrapper}>
                  <ICMapPointActive width="16" height="16" />
                  <Gap width={8} />
                  <Text style={styles.titleDate}>Nov 13, 2023</Text>
                </View>
              </View>
              <Gap height={8} />
              <View style={styles.wrapper}>
                <Text style={styles.titlePrice}>Start from $14</Text>
                <Text style={styles.titleStatus}>Available Ticket</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={styles.wrapperDotSlider}>
        {dataPopularEvent.map((item, i) => {
          return <View key={i} style={styles.dotSlider(i, isSelected)} />;
        })}
      </View>
    </View>
  );
};

export default CardPopularEvent;

const styles = StyleSheet.create({
  container: {
    width: 310,
    height: 256,
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.grey4,
    marginLeft: 18,
  },
  img: {
    width: 286,
    height: 140,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    marginHorizontal: 8,
    backgroundColor: colors.grey3,
  },
  titlePrice: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.blue,
    marginRight: 'auto',
  },
  titleStatus: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.yellow1,
    marginLeft: 'auto',
  },
  wrapperDotSlider: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotSlider: (i, isSelected) => ({
    width: 8,
    height: 8,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: i === isSelected ? colors.yellow1 : colors.grey3,
  }),
});
