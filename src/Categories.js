import React, { useEffect, useState, useRef } from "react";
import {
  Platform,
  BackHandler,
  Pressable,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Image,
  Text,
  ScrollView
} from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import NetInfo from "@react-native-community/netinfo";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../assets/logoMin.jpg'


const BACKGROUND_COLOR = "#FFFFFF";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const ANDROID_BAR_HEIGHT = Platform.OS === "android" ? Constants.statusBarHeight : 0;

export default function Categories({ navigation }) {

  return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
    
    <View style={{backgroundColor:'#fff', width:'100%', height:85, marginBottom:0}}>
    <Image style={{ alignSelf:'center', marginTop:30, width:"50%", height:"60%"}} source={logo}   />
    </View>
    <ScrollView  style={{alignSelf:'center', width:'95%', marginTop:30}}>
     
     <View style={{flexDirection:'row', alignSelf:'center'}}>
     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/news/'})}>
     <MaterialCommunityIcons name="newspaper-variant" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>News</Text>
     </Pressable>

     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/entertainment/'})}>
     <MaterialCommunityIcons name="folder-multiple-image" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Entertainment</Text>
     </Pressable>


     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/features/'})}>
     <MaterialCommunityIcons name="book-open" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Features</Text>
     </Pressable>
     </View>


     <View style={{flexDirection:'row', alignSelf:'center', marginTop:30}}>
     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/construction/'})}>
     <MaterialCommunityIcons name="account-hard-hat" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Construction</Text>
     </Pressable>

     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/columns/'})}>
     <MaterialCommunityIcons name="newspaper" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Columns</Text>
     </Pressable>


     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/foreign-reports/'})}>
     <MaterialCommunityIcons name="account-cowboy-hat" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Foreign</Text>
     </Pressable>
     </View>


     <View style={{flexDirection:'row', alignSelf:'center', marginTop:30}}>
     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/sports/'})}>
     <MaterialCommunityIcons name="basketball" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Sport</Text>
     </Pressable>

     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/videos/'})}>
     <MaterialCommunityIcons name="home-modern" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Politics</Text>
     </Pressable>


     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/news/'})}>
     <MaterialCommunityIcons name="hospital-building" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Health</Text>
     </Pressable>
     </View>

     <View style={{flexDirection:'row', alignSelf:'center', marginTop:30}}>
     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/news/'})}>
     <MaterialCommunityIcons name="school" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Education</Text>
     </Pressable>

     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/news/'})}>
     <MaterialCommunityIcons name="cash-multiple" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Economy</Text>
     </Pressable>


     <Pressable style={styles.box} onPress={()=>navigation.navigate('PageViewer',{ url:'https://www.pegasusreporters.com/category/news/'})}>
     <MaterialCommunityIcons name="rocket-launch" style={{fontSize:50, alignSelf:'center', marginTop:5, color:'red'}} />
     <Text style={{color:'#000',fontSize:14, alignSelf:'center', fontWeight:'bold'}}>Sci-Tech</Text>
     </Pressable>
     </View>
     </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: '#fff',
        },

        box:{
          width:'30%',
          height:90,
          backgroundColor:'#f7f7f7',
          borderRadius:10,
          margin:5,
       } ,
  });
