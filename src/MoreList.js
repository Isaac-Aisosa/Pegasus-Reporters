import React, { useEffect, useState, useRef } from "react";
import {
  Platform,
  BackHandler,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Image,
  ToastAndroid ,
  ScrollView,
  Text,
  Share,
} from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import NetInfo from "@react-native-community/netinfo";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../assets/logoMin.jpg'
import { FAB } from 'react-native-paper';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function MoreList({navigation}) {


  const WEBVIEW = useRef()

  const [loading, setLoading] = useState(true)
  const [backButtonEnabled, setBackButtonEnabled] = useState(false)
  const [isConnected, setConnected] = useState(true)

  const [WebState, setWebState] = useState('')

  // Webview content loaded
  function webViewLoaded() {
    setLoading(false)
  };

  // Webview navigation state change
  function onNavigationStateChange(navState) {
    setBackButtonEnabled(navState.canGoBack)
  };

  function SavePage(){
    if (WebState.length === 0){
      ToastAndroid.show("Sorry can't save this Page!", ToastAndroid.SHORT); 
    }
    else{
      ToastAndroid.show("Saved Successfully !", ToastAndroid.SHORT); 
      AsyncStorage.setItem(WebState, JSON.stringify(WebState));
      console.log('Pressed');
      console.log('Saving:' + WebState);
    }

  }



  useEffect(() => {
    // Handle back event
    function backHandler() {
      if (backButtonEnabled) {
        WEBVIEW.current.goBack();
        return true;
      }
    };

    // Subscribe to back state vent
    BackHandler.addEventListener("hardwareBackPress", backHandler);

    // Unsubscribe
    return () => BackHandler.removeEventListener("hardwareBackPress", backHandler);
  }, [backButtonEnabled])

  useEffect(() => {
    // Subscribe for net state
    const netInfroSubscribe = NetInfo.addEventListener((state) => {
      setConnected(state.isConnected)
      if (!state.isConnected) {
        alert("Cant connect to Pegasus Reporters Please connect to a network...");
      }
    });

    // Clean up
    return netInfroSubscribe
  }, [])

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'PEGASUS REPORTERS | Download Pegasus mobile App to get Latest news.. url: https://play.google.com/store/apps/details?id=com.Pegasus_reporter_app.www',
        
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
    
    <View style={{backgroundColor:'#fff', width:'100%', height:85, marginBottom:0}}>
    <Image style={{ alignSelf:'center', marginTop:30, width:"50%", height:"60%"}} source={logo}   />
    </View>

<ScrollView >
<Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('MorePageViewer',{ url:'https://www.pegasusreporters.com/about-us/'})}>
<MaterialCommunityIcons name="newspaper-variant-outline" style={{fontSize:40,color:'#000'}} />
<Text style={{fontSize:20,color:'#000',fontWeight:'normal', marginLeft:10}}>About Us{'\n'}
<Text style={{fontSize:15,color:'#cccccc',fontWeight:'normal'}}>Learn about us here...</Text></Text>
</Pressable>

<Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('MorePageViewer',{ url:'https://www.pegasusreporters.com/contact-us/'})}>
<MaterialCommunityIcons name="email-newsletter" style={{fontSize:40,color:'#000'}} />
<Text style={{fontSize:20,color:'#000',fontWeight:'normal', marginLeft:10}}>Contact Us{'\n'}
<Text style={{fontSize:15,color:'#cccccc',fontWeight:'normal'}}>Our contacts are here...</Text></Text>
</Pressable>


<Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={()=>navigation.navigate('MorePageViewer',{ url:'https://www.pegasusreporters.com/privacy-policy/'})}>
<MaterialCommunityIcons name="file-certificate" style={{fontSize:40,color:'#000'}} />
<Text style={{fontSize:20,color:'#000',fontWeight:'normal', marginLeft:10}}>Privacy Policy{'\n'}
<Text style={{fontSize:15,color:'#cccccc',fontWeight:'normal'}}>See our Policies...</Text></Text>
</Pressable>

<Pressable style={{width:'100%',height:50, flexDirection:'row', marginTop:30,marginLeft:20}} onPress={onShare}>
<MaterialCommunityIcons name="share-variant" style={{fontSize:40,color:'#000'}} />
<Text style={{fontSize:20,color:'#000',fontWeight:'normal', marginLeft:10}}>Share App{'\n'}
<Text style={{fontSize:15,color:'#cccccc',fontWeight:'normal'}}>Share App with friends...</Text></Text>
</Pressable>
 
 </ScrollView>

 </View>

  )
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: '#fff',
        },

        fab: {
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 150,
          backgroundColor:'red'
        },
  });
