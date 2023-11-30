/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import {ICBack, ICMenuDot, ICShare, ICUserGroup} from '../../assets/icons';
import {Gap} from '../../components';
import {fonts} from '../../utils/fonts';
import {ILBanner1} from '../../assets/ilustrations';
import {
  CardAbout,
  CardDetail,
  CardEventTime,
  CardFooter,
  CardMap,
  CardPeople,
  SelectTicket,
} from '../../components/moleculs';

const HomeDetail = ({navigation, route}) => {
  const [isVisible, setIsVisible] = useState(false);

  const onHandleBack = () => {
    navigation.goBack();
  };

  const onHandleGetTicket = () => {
    setIsVisible(!isVisible);
  };

  const RenderHeader = () => {
    return (
      <View style={styles.wrapperHeader}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={onHandleBack}>
            <ICBack />
          </TouchableOpacity>
          <Gap width={24} />
          <Text style={styles.titleHeader}>Details</Text>
        </View>
        <View style={styles.wrapper}>
          <TouchableOpacity>
            <ICShare />
          </TouchableOpacity>
          <Gap width={24} />
          <TouchableOpacity>
            <ICMenuDot />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const RenderTitle = () => {
    return (
      <View style={styles.wrapperTitle}>
        <View style={styles.wrapperContent}>
          <ICUserGroup />
          <Gap width={8} />
          <Text style={styles.titleStatus}>Live Event</Text>
        </View>
        <Gap height={8} />
        <Text style={styles.title}>Football Weekly Live Tour: London</Text>
        <Gap height={8} />
        <Text style={styles.titleDesc}>
          Back in 2023 thanks to overwhelming public demand - it’s the Football
          Weekly Live tour.
        </Text>
        <Gap height={16} />
        <Image source={ILBanner1} style={styles.img} />
      </View>
    );
  };

  const RenderDetail = () => {
    return (
      <View style={styles.wrapperDetail}>
        <CardDetail />
        <Gap height={16} />
        <CardMap />
        <Gap height={16} />
        <CardEventTime />
        <Gap height={16} />
        <CardPeople />
        <Gap height={16} />
        <CardAbout />
        <Gap height={18} />
        <CardFooter onPress={onHandleGetTicket} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderHeader />
        <RenderTitle />
        <RenderDetail />
      </ScrollView>
      <SelectTicket isVisible={isVisible} onPress={onHandleGetTicket} />
    </View>
  );
};

export default HomeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.navy,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperHeader: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    color: colors.white,
  },
  wrapperTitle: {
    padding: 16,
  },
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStatus: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
  titleDesc: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
  },
  img: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  wrapperDetail: {
    marginTop: 'auto',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 29,
    paddingHorizontal: 18,
    width: '100%',
    // height: 'auto',
    backgroundColor: colors.white,
  },
});
