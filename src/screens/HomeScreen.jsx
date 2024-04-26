//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput,FlatList,Dimensions, ScrollView,SafeAreaView} from 'react-native';
import CoffeeTabs from '../components/CoffeeTabs';
import MenuItem from '../components/MenuItem';

// create a component
const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/menuIcon.png')} />
        <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 600}}>
          Home
        </Text>
        <Image source={require('../assets/images/profileIcon.png')} />
      </View>
      <ScrollView style={{marginBottom:20}}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: 'white',
          padding: 20,
          lineHeight: 36,
        }}>
        Find the best{'\n'}
        coffee for you
      </Text>
      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#141921',
            borderRadius: 20,
            // paddingLeft: 10,
          }}>
          <Image
            source={require('../assets/images/searchIcon.png')}
            style={{marginHorizontal: 15}}
          />
          <TextInput
            placeholder="Find Your Coffee..."
            placeholderTextColor={'#52555A'}
          />
        </View>
      </View>
<View style={{height:"10%"}}><CoffeeTabs/></View>
<View style={{height:windowHeight*0.3,margin:10}}>
<FlatList

data={[1,1,1,1,1,,1,1,11,,1,1]}
renderItem={()=><MenuItem/>}
horizontal={true}
ItemSeparatorComponent={()=><View style={{width:10}}/>}
/>

</View>
<Text   style={{
          fontSize: 16,
          fontWeight: 500,
          color: 'white',
          padding: 20,
          lineHeight: 20,
        }}>Coffee beans</Text>

<View style={{height:windowHeight*0.3,margin:10}}>
<FlatList

data={[1,1,1,1,1,,1,1,11,,1,1]}
renderItem={()=><MenuItem/>}
horizontal={true}
ItemSeparatorComponent={()=><View style={{width:10}}/>}
/>

</View>
</ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#0c0f14',
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignContent: 'space-between',
    backgroundColor: '#0c0f14',
    width: '100%',
    height: '8%',
    padding: 20,
  },
});

//make this component available to the app
export default HomeScreen;
