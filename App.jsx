//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import MyStack from './src/utils/navigation';
// create a component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MyStack/>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
