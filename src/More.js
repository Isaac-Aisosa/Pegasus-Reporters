import React from 'react';
import { createStackNavigator, HeaderTitle, } from '@react-navigation/stack';
import MoreList from './MoreList';
import MorePageViewer from './MorePageView';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='MoreList' component={MoreList}/>
        <RootStack.Screen name='MorePageViewer' component={MorePageViewer}/>

    </RootStack.Navigator>
);
export default RootStackScreen;