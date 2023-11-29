/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import {
  ICEmail,
  ICEyeClosed,
  ICEyeOpened,
  ICLogo,
  ICPassword,
} from '../../assets/icons';
import Gap from '../../components/Gap';
import {fonts} from '../../utils/fonts';
import {Input, Link} from '../../components';
import Button from '../../components/Button';

const SignIn = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onHandleSignIn = () => {
    navigation.replace('MainApp');
  };

  const onHandleNavigate = () => {
    navigation.navigate('SignUp');
  };

  const onHandleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const iconSecureTextEntry = secureTextEntry ? (
    <ICEyeClosed />
  ) : (
    <ICEyeOpened />
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapperIcon}>
        <ICLogo />
      </View>
      <View style={styles.wrapperContent}>
        <Text style={styles.titleContent}>Welcome Back 👋</Text>
        <Text style={styles.subTitleContent}>
          Please enter your login information below to access your account
        </Text>
        <Gap height={24} />
        <Input
          label="Email"
          placeholder="Enter Your Email"
          iconLeft={<ICEmail />}
        />
        <Input
          label="Password"
          placeholder="Enter Your Password"
          iconLeft={<ICPassword />}
          iconRight={iconSecureTextEntry}
          secureTextEntry={secureTextEntry}
          onSecureText={onHandleSecureTextEntry}
        />
        <Link
          title="Forgot Password?"
          style={{
            marginLeft: 'auto',
          }}
          onPress={() => console.log('forgot password')}
        />
        <Gap height={24} />
        <Button title="Login" onPress={onHandleSignIn} />
        <Gap height={24} />
        <View style={styles.wrapperFooter}>
          <Text style={styles.titleFooter}>Don't have an account?</Text>
          <Link title="Register" onPress={onHandleNavigate} />
        </View>
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
    marginTop: 78,
    marginBottom: 60,
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
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
  subTitleContent: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: fonts.primary[400],
    color: colors.grey2,
  },
  wrapperFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleFooter: {
    fontSize: 14,
    marginRight: 4,
    color: colors.grey2,
    fontFamily: fonts.primary[600],
  },
});
