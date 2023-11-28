import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Gap, Input, Link} from '../../components';
import {ICEmail, ICPassword, ICUser} from '../../assets/icons';
import Button from '../../components/Button';

const SignUp = ({navigation}) => {
  const onHandleSignUp = () => {};

  const onHandleNavigate = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.titleContent}>Register Here</Text>
        <Text style={styles.subTitleContent}>
          Please enter your data to complete your account registration process
        </Text>
        <Gap height={24} />
        <Input label="Name" placeholder="" iconLeft={<ICUser />} />
        <Input label="Email" placeholder="" iconLeft={<ICEmail />} />
        <Input label="Phone Number" placeholder="" iconLeft={<ICEmail />} />
        <Input
          label="Create Password"
          placeholder=""
          iconLeft={<ICPassword />}
        />
        <Input
          label="Confirm Password"
          placeholder=""
          iconLeft={<ICPassword />}
        />
        <Gap height={6} />
        <Button title="Register" onPress={onHandleSignUp} />
        <Gap height={24} />
        <View style={styles.wrapperFooter}>
          <Text style={styles.titleFooter}>Don't have an account?</Text>
          <Link title="Login" onPress={onHandleNavigate} />
        </View>
      </View>
    </ScrollView>
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
});
