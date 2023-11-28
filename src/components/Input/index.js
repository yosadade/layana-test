import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Input = ({
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  disable,
  keyboardType,
  iconLeft,
  iconRight,
}) => {
  const [border, setBorder] = useState(colors.grey1);
  const onFocusForm = () => {
    setBorder(colors.navy);
  };
  const onBlurForm = () => {
    setBorder(colors.grey1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.content(border)}>
        <View style={styles.iconLeft}>{iconLeft}</View>
        <TextInput
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disable}
          selectTextOnFocus={!disable}
          keyboardType={keyboardType}
        />
        <View style={styles.iconRight}>{iconRight}</View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
    width: '100%',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: colors.black1,
    fontFamily: fonts.primary[400],
  },
  content: border => ({
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: border,
  }),
  iconLeft: {
    position: 'absolute',
    marginHorizontal: 12,
  },
  iconRight: {
    position: 'absolute',
    marginHorizontal: 12,
  },
  input: {
    padding: 12,
    marginLeft: 32,
    // width: '80%',
  },
});
