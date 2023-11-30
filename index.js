/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initDatabase} from './src/utils/db';

AppRegistry.registerComponent(appName, () => App);
initDatabase();
