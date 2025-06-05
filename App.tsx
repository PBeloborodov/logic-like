import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen} from '@screens/MainScreen';
import {RootStackParamList} from '@/types/navigation';
import {FiltersScreen} from '@/screens/FiltersScreen';
import {StatusBar} from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  useEffect(() => {
    changeNavigationBarColor('transparent', false);
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="main" component={MainScreen} />
          <Stack.Screen name="filters" component={FiltersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent={true} />
    </>
  );
}

export default App;
