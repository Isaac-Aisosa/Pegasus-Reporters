import React, { useEffect, useState, useRef } from "react";
import {
  Platform,
  Pressable,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Image,
  ToastAndroid ,
  FlatList,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import NetInfo from "@react-native-community/netinfo";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../assets/logoMin.jpg'
import { FAB } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'

import em from '../assets/em.png'


export default function SavedList({navigation}) {
    const [Savedpages, setSevedPages] = useState([]);

    useEffect(() => {
        importData()
     
        const reload = setInterval(() => {
        importData()
       }, 1000 * 10) // in milliseconds
       return () => clearInterval(reload)
       }, [])

   let importData = async () => {
        try {
             const keys = await AsyncStorage.getAllKeys();
             //const result = await AsyncStorage.multiGet(keys);
            // console.log(keys);
             setSevedPages(keys);
        } catch (error) {
          console.error(error)
        }
      }

    function DeleteItem(item){
      AsyncStorage.removeItem(item);
      // console.log(item);
      ToastAndroid.show("Delete Success!", ToastAndroid.LONG); 
      importData();
    }

    function DeleteAll(){
        AsyncStorage.clear();
        // console.log(item);
        ToastAndroid.show("BookMark deleted Success!", ToastAndroid.LONG); 
        importData();
      }


  return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'}/>
    
    <View style={{backgroundColor:'#fff', width:'100%', height:85, marginBottom:0}}>
    <Image style={{ alignSelf:'center', marginTop:30, width:"50%", height:"60%"}} source={logo}   />
    </View>

    <View style={{backgroundColor:'#fff', width:'100%', height:50, marginTop:10,}}>
    <Text style={{textAlignVertical:'center', marginLeft:10, fontSize:18, fontWeight:'bold'}}>BookMarked Page</Text>

    <Pressable  onPress={DeleteAll}
    style={{alignSelf:'flex-end', paddingRight:20,flexDirection:'row', backgroundColor:'red', borderRadius:15,padding:5, position:'absolute'}}>
    <MaterialCommunityIcons name="close-box-multiple" style={{fontSize:12,color:'#fff', marginRight:2, textAlignVertical:'center'}} />
    <Text style={{textAlignVertical:'center', marginRight:5, fontSize:14, fontWeight:'bold', color:'#fff'}}>Delete all</Text>
    </Pressable>
    
    </View>
    {(!Savedpages || Savedpages.length === 0) && (
        <View
          style={{
            backgroundColor: '#fff',
            position:'relative',
            top: 0,
            left: 0,
            zIndex: 10,
            width: '100%',
            height: '100%',
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >

         <Image source={require("../assets/em.gif")} style={{width:'90%', height:'90%', marginTop:20}}></Image>
         <Text style={{textAlignVertical:'center', marginRight:5, fontSize:18, fontWeight:'bold', color:'#000'}}>BookMark is Empty!</Text>

        </View>
      )}

   {(Savedpages) && (
    <FlatList
      data={Savedpages}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        
        <View style={{backgroundColor:'#fff', width:'100%',height:80, borderBottomWidth:0.5, borderBottomColor:'#dedee3',paddingRight:60,}}>
          <View style={{flexDirection:'row',marginRight:20,}}>
          <MaterialCommunityIcons name="newspaper" style={{fontSize:30,color:'red', margin:10, marginRight:0}} />
           <Text 
            onPress={()=>navigation.navigate('SavedPageViewer',{ url: item})}
           style={{textAlignVertical:'center', marginLeft:10, fontSize:14}}>{item.split("https://www.pegasusreporters.com/", 20)}</Text>
           </View>

           <MaterialCommunityIcons name="close" style={{fontSize:20,color:'#000',
           position:'absolute', marginTop:35, alignSelf:'flex-end', paddingRight:20}}   onPress={(i)=>DeleteItem(item)}/>
     
           </View>
       
      )}
    />
    )}
    
    </View>

  ); 
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: '#fff',
        },

  });
