/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen} from '@screens/MainScreen';
import {RootStackParamList} from '@/types/navigation';
import {FiltersScreen} from '@/screens/FiltersScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="filters" component={FiltersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
