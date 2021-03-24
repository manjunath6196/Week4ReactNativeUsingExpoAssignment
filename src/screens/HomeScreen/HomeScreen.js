
import React, { useState } from 'react';
import { StyleSheet, View, Button,ImageBackground,ScrollView,TouchableOpacity, FlatList, Text,TextInput } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles';

export default function HomeScreen({navigation}) {
  
  const geoLocationScreen = () => {
    navigation.navigate('GeoLocationScreen')}; 

  const onImagePickerScreen = () => {
    navigation.navigate('ImagePickerScreen')};
  
  const onAddNewGoalScreen = () => {
    navigation.navigate('AddNewGoalScreen')};
  
  return (
   
    <View style = {StyleSheet.container}>
           <br></br>        
      
      <b>
             Hello Manjunath, Welcome To Home Screen
              </b>
             <br></br>        
   
       <Button title="Geo Location" onPress={geoLocationScreen} style={styles.headerLink}>
      Geo Location</Button>
      <br></br>
 
      <Button title="Image Picker" onPress={onImagePickerScreen} style={styles.headerLink}>
      Image Picker</Button>
      <br></br>
      
      <Button title="Add New Goals" onPress={onAddNewGoalScreen} style={styles.headerLink}>
      Add New Goals</Button>
      <br></br>
     </View>
  );
}

