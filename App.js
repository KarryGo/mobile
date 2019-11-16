import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import screens from './packages/screens';

export default createAppContainer(createStackNavigator(screens));
