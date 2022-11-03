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
  TouchableOpacity,
  Animated,
  Easing,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import NetInfo from "@react-native-community/netinfo";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../assets/logoMin.jpg'
import { FAB } from 'react-native-paper';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AsyncStorage from '@react-native-async-storage/async-storage'


const BACKGROUND_COLOR = "#FFFFFF";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const ANDROID_BAR_HEIGHT = Platform.OS === "android" ? Constants.statusBarHeight : 0;

export default function PageViewer({ route, navigation }) {

  let rotateValueHolder = new Animated.Value(0);
  const startImageRotateFunction = () => {
      rotateValueHolder.setValue(0);
      Animated.timing(rotateValueHolder, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => startImageRotateFunction());
    };
  
    const RotateData = rotateValueHolder.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  
    startImageRotateFunction();

  const WEBVIEW = useRef()

  const [loading, setLoading] = useState(true)
  const [backButtonEnabled, setBackButtonEnabled] = useState(false)
  const [isConnected, setConnected] = useState(true)
  const { url } = route.params;

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

  return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
    
    <View style={{backgroundColor:'#fff', width:'100%', height:85, marginBottom:0}}>
    <Image style={{ alignSelf:'center', marginTop:30, width:"50%", height:"60%"}} source={logo}   />
    </View>

      <View
        style={{
          height: 0,
          backgroundColor: BACKGROUND_COLOR,
        }}
      ></View>
      {(loading || !isConnected) && (
        <View
          style={{
            backgroundColor: '#fff',
            position:'absolute',
            top: 0,
            left: 0,
            zIndex: 10,
            width: DEVICE_WIDTH,
            height: DEVICE_HEIGHT + ANDROID_BAR_HEIGHT,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        <Animated.Image
          style={{
            width: 80,
            height: 80,
            transform: [{ rotate: RotateData }],
          }}
          source={require("../assets/logo3.png")}
        />
        </View>
      )}
      {isConnected && (
        <View
        style={{
        backgroundColor: '#fff',
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT + ANDROID_BAR_HEIGHT,}}>

         <WebView
          onLoad={webViewLoaded}
          ref={WEBVIEW}
          useWebKit={true}
          onNavigationStateChange={onNavigationStateChange}
          onShouldStartLoadWithRequest={(event) => {
            if (event.url) {
              console.log(event.url);
              setWebState(event.url);
              return true
            }

          }}
          source={{ uri: url }}
        />

        <FAB
          icon="bookmark-check"
          style={styles.fab}
          onPress={SavePage}
        />
       </View>
         )}

    </View>
  );

  
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
