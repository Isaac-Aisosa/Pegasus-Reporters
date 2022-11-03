import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Categories from './Categories';
import PageViewer from './PageViewer';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) =>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='Categories' component={Categories}/>
        <RootStack.Screen name='PageViewer' component={PageViewer}/>

    </RootStack.Navigator>
);
export default RootStackScreen;