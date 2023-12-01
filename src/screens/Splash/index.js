import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../utils/colors';
import {ICLogo} from '../../assets/icons';
import {getData} from '../../utils/localStorage';

const Splash = ({navigation}) => {
  useEffect(() => {
    getData('user').then(res => {
      res === null
        ? setTimeout(() => {
            navigation.replace('SignIn');
          }, 2000)
        : navigation.replace('MainApp');
    });
  });

  return (
    <View style={styles.container}>
      <ICLogo />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.navy,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
