import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationTheme } from 'ui/themes/app-theme';
import Index from 'pages';
import EncontrarDevfreela from 'pages/encontrar-devfreela';

const Stack = createStackNavigator();

const Router: React.FC = () => {
  return <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator>
        <Stack.Screen name={'Index'} component={Index} />
        <Stack.Screen name={'EncontrarDevfreela'} component={EncontrarDevfreela} />
      </Stack.Navigator>
    </NavigationContainer>;
};

export default Router;