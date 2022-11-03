import * as React from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home'
import Categories from './Select'
import More from './More'
import Saved from './Saved'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
        activeTintColor: '#eb0722',
        inactiveTintColor:'#8a8787',
        labelStyle: { fontSize: 14, fontWeight:'normal' },
    
        style:{
           backgroundColor:'#fff',
           paddingBottom:5,
           paddingTop:5,
           borderTopColor:'#fff',
           height:60,
           fontSize:30
        }
        
      }}

   >
    
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={25} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Categorie"
        component={Categories}
        options={{
          headerShown: false,
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="compass" color={color} size={25} />
          ),
        }}
      />


      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          headerShown:false,
          tabBarLabel: 'BookMark',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={25} />
          ),
        }}
      />

     <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dots-horizontal-circle" color={color} size={25} />
          ),
        }}
      />  
    </Tab.Navigator>

    

     





  );
}