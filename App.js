import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from './src/components/Header';
import Main from './src/components/Main'

export default function App() {
 return (
   <View style={styles.container}>
     <Header/>
     <Main/>
   </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
})