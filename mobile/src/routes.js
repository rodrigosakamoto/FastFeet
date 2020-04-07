import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ConfirmDelivery from './pages/Dashboard/ConfirmDelivery';
import ShowProblems from './pages/Dashboard/ShowProblems';
import ReportProblems from './pages/Dashboard/ReportProblems';
import DeliveryDetails from './pages/Dashboard/DeliveryDetails';
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
            Dashboard: {
              screen: createStackNavigator(
                {
                  Dashboard,
                  DeliveryDetails,
                  ReportProblems,
                  ShowProblems,
                  ConfirmDelivery,
                },
                {
                  defaultNavigationOptions: {
                    headerTintColor: '#fff',
                    headerTransparent: true,
                    headerLeftContainerStyle: {
                      marginLeft: 16,
                    },
                    headerTitleAlign: 'center',
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Entregas',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="reorder" size={25} color={tintColor} />
                ),
              },
            },
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
