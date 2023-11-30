/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {
  ICArrowUp,
  ICExplore,
  ICLogoMini,
  ICMapPoint,
  ICNotif,
} from '../../assets/icons';
import {ILAvatar} from '../../assets/ilustrations';
import {Gap} from '../../components';
import {fonts} from '../../utils/fonts';
import {
  dataSearchesEvent,
  dataTabbar,
  dataUpcomingEvent,
} from '../../utils/datas';
import {
  CardPopularEvent,
  CardSearchesEvent,
  CardUpcomingEvent,
  TabBar,
} from '../../components/moleculs';

const Home = ({navigation}) => {
  const onHandleDetail = () => {
    navigation.navigate('HomeDetail');
  };

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
      </View>
    );
  };

  const RenderUpcomingEvent = () => {
    return (
      <View style={styles.wrapperEvent}>
        <Text style={styles.titleNameUpcoming}>Hey Jude</Text>
        <Text style={styles.titleEvent}>
          You have 2 upcoming events today 🗓
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dataUpcomingEvent.map((item, i) => {
            const {img, status, title, location, date, time} = item;
            return (
              <CardUpcomingEvent
                key={i}
                img={img}
                status={status}
                title={title}
                location={location}
                date={date}
                time={time}
                onPress={() => onHandleDetail(item)}
              />
            );
          })}
        </ScrollView>
        <Gap height={24} />
        <View style={styles.wrapperTabbar}>
          <TabBar data={dataTabbar} />
        </View>
      </View>
    );
  };

  const RenderPopularEvent = () => {
    return (
      <View style={styles.wrapperEvent}>
        <Text style={styles.titleEvent}>🥤 Popular Event</Text>
        <CardPopularEvent onPress={onHandleDetail} />
      </View>
    );
  };

  const RenderSearchesEvent = () => {
    return (
      <View style={styles.wrapperUpcoming}>
        <Text style={styles.titleUpcoming}>🔍 Based on Your Searches</Text>
        {dataSearchesEvent.map((item, i) => {
          const {img, title, attended, date} = item;
          return (
            <CardSearchesEvent
              key={i}
              img={img}
              title={title}
              date={date}
              attended={attended}
              onPress={() => onHandleDetail(item)}
            />
          );
        })}
        <Gap height={12} />
        <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
          <Text style={styles.titleBtn}>Explore More</Text>
          <ICArrowUp />
        </TouchableOpacity>
      </View>
    );
  };

  const RenderEditorPicksEvent = () => {
    return (
      <View style={styles.wrapperUpcoming}>
        <Text style={styles.titleUpcoming}>👍🏻 Editor Picks</Text>
        {dataSearchesEvent.map((item, i) => {
          const {img, title, attended, date} = item;
          return (
            <CardSearchesEvent
              key={i}
              img={img}
              title={title}
              date={date}
              attended={attended}
              onPress={() => onHandleDetail(item)}
            />
          );
        })}
        <Gap height={12} />
        <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
          <Text style={styles.titleBtn}>Explore More</Text>
          <ICArrowUp />
        </TouchableOpacity>
        <Gap height={20} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RenderHeader />
        <RenderUpcomingEvent />
        <RenderPopularEvent />
        <RenderSearchesEvent />
        <RenderEditorPicksEvent />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue2,
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
    backgroundColor: colors.blue2,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  titleEvent: {
    fontSize: 18,
    marginBottom: 16,
    marginLeft: 18,
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
  wrapperEvent: {
    backgroundColor: colors.blue2,
    paddingVertical: 12,
  },
  titleNameUpcoming: {
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 18,
    fontFamily: fonts.primary.normal,
    color: colors.grey3,
  },
  titleUpcoming: {
    fontSize: 18,
    marginBottom: 16,
    fontFamily: fonts.primary[600],
    color: colors.blue,
  },
  btn: {
    width: 183,
    height: 52,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: colors.navy,
  },
  titleBtn: {
    fontSize: 16,
    marginRight: 8,
    fontFamily: fonts.primary[700],
    color: colors.navy,
  },
  wrapperTabbar: {
    paddingHorizontal: 18,
  },
});
