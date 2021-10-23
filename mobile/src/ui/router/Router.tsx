import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationTheme } from 'ui/themes/app-theme';
import Index from 'pages';
import EncontrarDevfreela from 'pages/encontrar-devfreela';
import Logo from '@assets/img/logos/devFreela.png';

const Stack = createStackNavigator();

export type RootStackParamList = {
    Index: undefined;
    EncontrarDevfreela: undefined;
};

const Router: React.FC = () => {
    return (
        <NavigationContainer theme={NavigationTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Index'}
                    component={Index}
                    options={{
                        headerTitleAlign: 'center',
                        headerTitle: () => (
                            <Image
                                style={{
                                    width: 150,
                                    height: 50,
                                    resizeMode: 'contain',
                                }}
                                source={Logo}
                            />
                        ),
                    }}
                />

                <Stack.Screen
                    name={'EncontrarDevfreela'}
                    component={EncontrarDevfreela}
                    options={{
                        title: 'Encontrar Freelancers',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;




// import React from 'react';
// import { Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationTheme } from 'ui/themes/app-theme';
// import Index from 'pages';
// import EncontrarDevfreela from 'pages/encontrar-devfreela';
// import Logo from '@assets/img/logos/devFreela.png';

// const Stack = createStackNavigator();

// export type RootStackParamList = {
//   Index: underfined;
//   EncontrarDevfreela: underfined;
// };

// const Router: React.FC = () => {
//   return (
//     <NavigationContainer theme={NavigationTheme}>
//       <Stack.Navigator>
//         <Stack.Screen 
//           name={'Index'} 
//           component={Index} 
//           options={{
//             headerTitleAlign: 'center',
//             headerTitle: () => (
//               <Image 
//                 style={{
//                   width: 150,
//                   height: 50,
//                   resizeMode: 'contain',
//                 }} 
//                 source={Logo} 
//               />
//             ),
//           }}
//         />
//         <Stack.Screen 
//           name={'EncontrarDevfreela'} 
//           component={EncontrarDevfreela}
//           options={{
//             title: 'Encontrar Freelancers',
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Router;