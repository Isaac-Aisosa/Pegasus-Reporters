import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SvedList from './SavedList';
import SavedPageViewer from './SavedPageView';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='SvedList' component={SvedList}/>
        <RootStack.Screen name='SavedPageViewer' component={SavedPageViewer}/>

    </RootStack.Navigator>
);
export default RootStackScreen;