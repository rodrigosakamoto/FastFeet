import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import Sign from './pages/Sign';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign,
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#7D40E7',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },

      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
