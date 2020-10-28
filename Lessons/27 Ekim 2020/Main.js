import React from 'react';
import {SafeAreaView} from 'react-native';

import {createStore} from 'redux';
import {Provider} from 'react-redux'; //Provider'ı çağırıyoruz

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {reducer, initialState} from './context';

import Component_A from './pages/Component_A';
import Component_B from './pages/Component_B';

const store = createStore(reducer, initialState);
const Stack = createStackNavigator();

const Main = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="A" component={Component_A} />
          <Stack.Screen name="B" component={Component_B} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Main;
