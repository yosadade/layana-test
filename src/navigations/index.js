// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../screens';

const Stack = createNativeStackNavigator();

function Navigations() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Navigations;
