import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Gap, Input, Link} from '../../components';
import {
  ICCheck,
  ICDropdownNumber,
  ICEmail,
  ICEyeClosed,
  ICEyeOpened,
  ICPassword,
  ICUser,
} from '../../assets/icons';
import Button from '../../components/Button';
import {addUser} from '../../utils/db';

const SignUp = ({navigation}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const {name, email, phoneNumber, password, confirmPassword} = form;

  const onHandleSignUp = () => {
    if (password === confirmPassword) {
      if (!name || !email || !phoneNumber || !password) {
        Alert.alert('Registration Failed', 'All fields are required');
        return;
      }
      navigation.replace('SignIn');
    } else {
      Alert.alert('Password and Confirm Password not same!');
    }
  };

  const onHandleNavigate = () => {
    navigation.navigate('SignIn');
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleContent}>Register Here</Text>
        <Text style={styles.subTitleContent}>
          Please enter your data to complete your account registration process
        </Text>
        <Gap height={24} />
        <Input
          label="Name"
          placeholder="Enter Your Name"
          iconLeft={<ICUser />}
          value={name}
          onChangeText={value =>
            setForm({
              ...form,
              name: value,
            })
          }
        />
        <Input
          label="Email"
          placeholder="Enter Your Email"
          iconLeft={<ICEmail />}
          value={email}
          onChangeText={value =>
            setForm({
              ...form,
              email: value,
            })
          }
        />
        <Input
          type="phone-number"
          label="Phone Number"
          placeholder="Enter Your Phone Number"
          keyboardType="phone-pad"
          iconLeft={
            <View style={styles.iconPhoneNumber}>
              <ICDropdownNumber height="100" />
            </View>
          }
          iconRight={
            <ICCheck fill={phoneNumber.length >= 9 ? '#008000' : '#D1D5DB'} />
          }
          value={phoneNumber}
          onChangeText={value =>
            setForm({
              ...form,
              phoneNumber: value,
            })
          }
        />
        <Input
          label="Password"
          placeholder="Enter Your Password"
          iconLeft={<ICPassword />}
          iconRight={iconSecureTextEntry}
          secureTextEntry={secureTextEntry}
          onSecureText={onHandleSecureTextEntry}
          value={password}
          onChangeText={value =>
            setForm({
              ...form,
              password: value,
            })
          }
        />
        <Input
          label="Confirm Password"
          placeholder="Enter Your Confirm Password"
          iconLeft={<ICPassword />}
          iconRight={iconSecureTextEntry}
          secureTextEntry={secureTextEntry}
          onSecureText={onHandleSecureTextEntry}
          value={confirmPassword}
          onChangeText={value =>
            setForm({
              ...form,
              confirmPassword: value,
            })
          }
        />
        <Gap height={6} />
        <Button title="Register" onPress={onHandleSignUp} />
        <Gap height={24} />
        <View style={styles.wrapperFooter}>
          <Text style={styles.titleFooter}>Don't have an account?</Text>
          <Link title="Login" onPress={onHandleNavigate} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 18,
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
  iconPhoneNumber: {
    right: 12,
    position: 'relative',
  },
});
