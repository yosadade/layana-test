/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  Explore,
  Home,
  Profile,
  SignIn,
  SignUp,
  Splash,
  Ticket,
} from '../screens';
import {BottomNavigator} from '../components';
import {ICExplore, ICHome, ICProfile, ICTicket} from '../assets/icons';
import {colors} from '../utils/colors';
import HomeDetail from '../screens/HomeDetail';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Navigations() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MainApp() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.navy}
      inactiveColor={colors.grey1}
      tabBarOptions={{
        activeBackgroundColor: colors.white, // Set background ke transparent
      }}
      tabBarStyle={{
        backgroundColor: colors.white, // Set background ke transparent
      }}
      barStyle={{
        backgroundColor: colors.white,
        height: 69,
        activeBackgroundColor: colors.white,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => <ICHome focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused}) => <ICExplore focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={Ticket}
        options={{
          tabBarLabel: 'Ticket',
          tabBarIcon: ({focused, color}) => (
            <ICTicket focused={focused} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => <ICProfile focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigations;
