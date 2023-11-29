/* eslint-disable react/no-unstable-nested-components */
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {ICExplore, ICLogoMini, ICMapPoint, ICNotif} from '../../assets/icons';
import {ILAvatar} from '../../assets/ilustrations';
import {Gap} from '../../components';
import {fonts} from '../../utils/fonts';
import {dataUpcomingEvent} from '../../utils/datas';
import {CardUpcomingEvent} from '../../components/moleculs';

const Home = () => {
  const RenderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <ICLogoMini />
          <View style={styles.headerLeft}>
            <ICNotif />
            <Gap width={24} />
            <Image source={ILAvatar} />
          </View>
        </View>
        <Gap height={16} />
        <View style={styles.wrapper}>
          <View style={styles.wrapperHeaderLeft}>
            <Text style={styles.titleHeader}>
              Find events as easily as you snap your fingers
            </Text>
          </View>
          <View style={styles.wrapperHeaderRight}>
            <ICMapPoint />
            <Gap width={8} />
            <View>
              <Text style={styles.subTitleHeaderLocation}>Location</Text>
              <Text style={styles.titleHeaderLocation}>London, UK</Text>
            </View>
          </View>
        </View>
        <Gap height={9} />
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Search Here"
            placeholderTextColor={colors.navy3}
            style={styles.inputHeader}
          />
          <View style={styles.iconInputHeader}>
            <ICExplore />
          </View>
        </View>
        <Gap height={16} />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {img, status, title, location, date, time} = item;
    return (
      <CardUpcomingEvent
        img={img}
        status={status}
        title={title}
        location={location}
        date={date}
        time={time}
      />
    );
  };

  const RenderUpcomingEvent = () => {
    return (
      <View style={styles.wrapperUpcoming}>
        <Text style={styles.titleNameUpcoming}>Hey Jude</Text>
        <Text style={styles.titleUpcoming}>
          You have 2 upcoming events today 🗓
        </Text>
        <FlatList
          horizontal
          data={dataUpcomingEvent}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Gap height={24} />
        <View style={styles.wrapper}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <RenderHeader />
      <RenderUpcomingEvent />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.navy,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  headerLeft: {
    backgroundColor: colors.navy2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    paddingLeft: 12,
    borderRadius: 100,
  },
  titleHeader: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  wrapperHeaderLeft: {
    width: '65%',
  },
  wrapperHeaderRight: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 106,
  },
  subTitleHeaderLocation: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  titleHeaderLocation: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  inputHeader: {
    backgroundColor: colors.navy2,
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.navy3,
  },
  iconInputHeader: {
    position: 'absolute',
    right: 0,
    marginHorizontal: 14,
  },
  wrapperUpcoming: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  titleNameUpcoming: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: fonts.primary.normal,
    color: colors.grey3,
  },
  titleUpcoming: {
    fontSize: 18,
    marginBottom: 16,
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
});
