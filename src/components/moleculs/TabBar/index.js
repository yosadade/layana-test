import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const TabBar = ({data}) => {
  const [isSelected, setIsSelected] = useState('Live Event');

  const onHandleSelect = value => {
    setIsSelected(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperTabbar}>
        {data.map(item => {
          return (
            <Pressable
              key={item.title}
              style={styles.buttonTabbar(isSelected, item)}
              onPress={() => onHandleSelect(item.title)}>
              <Text style={styles.title(isSelected, item)}>{item.title}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    height: 41,
    width: '100%',
    backgroundColor: colors.blue2,
  },
  wrapperTabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.grey4,
    borderRadius: 100,
    width: '100%',
    height: 41,
    padding: 4,
  },
  buttonTabbar: (isSelected, item) => ({
    justifyContent: 'center',
    alignItems: 'center',
    elevation: isSelected === item.title ? 1 : 0,
    backgroundColor: isSelected === item.title ? colors.white : colors.grey4,
    width: 163,
    height: 33,
    borderRadius: 100,
  }),
  title: (isSelected, item) => ({
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: isSelected === item.title ? colors.blue : colors.grey3,
  }),
});
