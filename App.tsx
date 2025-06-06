import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen} from '@screens/MainScreen';
import {RootStackParamList} from '@/types/navigation';
import {FiltersScreen} from '@/screens/FiltersScreen';
import {StatusBar} from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {colors} from '@/constants/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  useEffect(() => {
    changeNavigationBarColor(colors.mainBackground, false);
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="main"
            component={MainScreen}
            initialParams={{tag: 'Все темы'}}
            options={{animation: 'fade'}}
          />
          <Stack.Screen name="filters" component={FiltersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar animated={true} backgroundColor={colors.mainBackground} />
    </>
  );
}

export default App;
