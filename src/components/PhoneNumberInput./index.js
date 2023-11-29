import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const PhoneNumberInput = () => {
  const [countryCode, setCountryCode] = useState('+62');
  const [phoneNumber, setPhoneNumber] = useState('089-568-000-000');

  const handleChangeCountryCode = value => {
    // setCountryCode(value);
    console.log(value);
  };

  const handleChangePhoneNumber = text => {
    setPhoneNumber(text);
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{label: '+62', value: '+62'}}
        items={[
          {label: '+1', value: '+1'},
          {label: '+44', value: '+44'},
          {label: '+81', value: '+81'},
          // Add other country codes as needed
        ]}
        onValueChange={handleChangeCountryCode}
        style={pickerSelectStyles}
        value="+62"
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={handleChangePhoneNumber}
        style={styles.phoneNumberInput}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  phoneNumberInput: {
    flex: 1,
    paddingVertical: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default PhoneNumberInput;
