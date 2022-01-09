import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>

      <TouchableOpacity>
        <Image
          source={require('../../img/logo.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require('../../img/send.png')}
          style={styles.send}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.2,
  },
  send: {
    width: 23,
    height: 23,
  }
})