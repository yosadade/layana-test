import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {ICLogo} from '../../assets/icons';
import Gap from '../../components/Gap';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Gap height={78} />
      <View style={styles.wrapperIcon}>
        <ICLogo />
      </View>
      <View style={styles.wrapperContent}>
        <Text style={styles.titleContent}>Welcome Back</Text>
        <Text style={styles.subTitleContent}>
          Please enter your login information below to access your account
        </Text>
        <Gap height={24} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.navy,
  },
  wrapperIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperContent: {
    paddingVertical: 24,
    paddingHorizontal: 18,
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    marginTop: 'auto',
    width: '100%',
    backgroundColor: colors.white,
  },
  titleContent: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.blue,
  },
  subTitleContent: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '400',
    color: colors.grey,
  },
});
