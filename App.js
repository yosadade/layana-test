import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigations from './src/navigations';
import {StatusBar} from 'react-native';
import {colors} from './src/utils/colors';
import {initDatabase} from './src/utils/db';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={colors.navy}
        barStyle="light-content"
      />
      <Navigations />
    </NavigationContainer>
  );
};

export default App;
