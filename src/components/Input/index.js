import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

const Input = ({
  type,
  label,
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  onSecureText,
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
          style={styles.input(type)}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disable}
          selectTextOnFocus={!disable}
          keyboardType={keyboardType}
        />
        {iconRight && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.iconRight}
            onPress={onSecureText}>
            {iconRight}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
    width: '100%',
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
    justifyContent: 'space-between',
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
    right: 0,
    marginHorizontal: 12,
  },
  input: type => ({
    padding: 12,
    marginLeft: type === 'phone-number' ? 68 : 32,
    width: '80%',
  }),
});
