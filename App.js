import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import { TabNavigator, StackNavigator } from 'react-navigation';
import reducers from './reducers';
import { firebaseConfigKeys } from './Config';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import DestinationScreen from './screens/DestinationScreen';
import DriversListScreen from './screens/DriversListScreen';
import AddDriverScreen from './screens/AddDriverScreen';

export default class App extends Component {
  componentWillMount() {

  firebase.initializeApp(firebaseConfigKeys);

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          destination: { screen: DestinationScreen },
          drivers: { screen: DriversListScreen },
          add_driver: { screen: AddDriverScreen }
        }, {
          tabBarOptions: {
            style: {
              borderTopWidth: 2,
              borderTopColor: '#3F8EFC'
            },
            labelStyle: {
              fontSize: 14
            },
            activeTintColor: '#3F8EFC'
          }
        })
      }
    }, {
      // Use navigationOptions in the future for configuration
      navigationOptions: { tabBarVisible: false },
      lazy: true
    });

    return (
        <Provider store={store}>
          <MainNavigator />
        </Provider>
    );
  }
}

// const MainNavigator = TabNavigator({
//       welcome: { screen: WelcomeScreen },
//       auth: { screen: AuthScreen },
//       main: {
//         screen: TabNavigator({
//           map: { screen: MapScreen },
//           deck: { screen: DeckScreen },
//           review: {
//             screen: StackNavigator({
//               review: { screen: ReviewScreen },
//               settings: { screen: SettingsScreen }
//             })
//           }
//         }, {
//           tabBarPosition: 'bottom',
//           tabBarOptions: {
//             labelStyle: { fontSize: 12 }
//           }
//         })
//       }
//     }, {
//       navigationOptions: {
//         tabBar: { visible: false }
//       },
//       lazyLoad: true
//     });
