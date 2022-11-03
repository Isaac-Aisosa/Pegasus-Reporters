// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button,Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle, } from '@react-navigation/stack';
import  Base from './src/Base';
import * as NavigationBar from 'expo-navigation-bar';


const Stack = createStackNavigator();

NavigationBar.setBackgroundColorAsync("white");

class App extends React.Component {
  render(){ 
  return (
    <NavigationContainer>
   <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Base" component={Base}  
        options={{ title: 'Pegasus',
        headerShown: false,
        headerTitleStyle: {
        fontWeight: 'bold',       
        },
        }}/>
     
     </Stack.Navigator>  
    </NavigationContainer>

  );

  
}

}
export default (App)

