import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {colors} from '../../../utils/colors';
import {ICListModal} from '../../../assets/icons';
import Gap from '../../Gap';
import {fonts} from '../../../utils/fonts';
import {dataSelectTicket} from '../../../utils/datas';
import Button from '../../Button';

const SelectTicket = ({isVisible, onPress}) => {
  const [isSelected, setIsSelected] = useState(null);

  const onHandleSelect = value => {
    setIsSelected(value);
  };

  return (
    <View>
      <Modal isVisible={isVisible} style={styles.modal}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <ICListModal />
          </View>
          <Gap height={24} />
          <Text style={styles.title}>Select Ticket</Text>
          <Gap height={16} />
          {dataSelectTicket.map(item => {
            const {id, access, seat, price, status, icon} = item;
            return (
              <TouchableOpacity
                disabled={status === 'Sold'}
                key={id}
                style={styles.card(id, isSelected)}
                activeOpacity={0.7}
                onPress={() => onHandleSelect(id)}>
                <View style={styles.wrapperLeft}>
                  <View style={styles.wrapperIcon}>{icon}</View>
                  <Gap width={8} />
                  <View>
                    <Text style={styles.titleAccess(status)}>{access}</Text>
                    <Gap height={4} />
                    <Text style={styles.titleSeat(id, isSelected)}>{seat}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.titlePrice(status)}>${price}</Text>
                  {status && (
                    <>
                      <Gap height={4} />
                      <Text style={styles.titleStatus}>{status}</Text>
                    </>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
          <Gap height={8} />
          <Button
            title="Continue"
            onPress={() => {
              if (isSelected !== null) {
                onPress();
                setIsSelected();
              } else {
                Alert.alert('Error', 'Please choose one ticket!');
              }
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SelectTicket;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderTopLeftRadius: 24,
    borderTopEndRadius: 24,
    marginTop: 'auto',
    backgroundColor: colors.white,
  },
  modal: {
    margin: 0,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
  card: (id, isSelected) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 8,
    borderColor: id === isSelected ? colors.navy : colors.grey4,
  }),
  wrapperLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.grey4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleAccess: status => ({
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: status !== 'Sold' ? colors.navy : colors.grey3,
  }),
  titleSeat: (id, isSelected) => ({
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: id === isSelected ? colors.navy : colors.grey3,
  }),
  titlePrice: status => ({
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: status !== 'Sold' ? colors.navy : colors.grey3,
  }),
  titleStatus: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.grey3,
  },
});
