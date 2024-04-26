import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MenuItem = ({title}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <LinearGradient
      colors={['rgba(37, 42, 50, 1)', '#0c0f14']}
      start={{x: 0, y: 0}} // Start from top-left corner (x: 0, y: 0)
      end={{x: 1, y: 1}} // End at bottom-right corner (x: 1, y: 1)
      locations={[0.04, 0.9193]}
      style={[
        styles.container,
        {width: windowWidth * 0.4, height: windowHeight * 0.3},
      ]}>
      <Image
        source={require('../assets/images/menuItem.png')}
        resizeMode="cover"
        style={{
          width: windowWidth * 0.3,
          borderRadius: 20,
          height: windowHeight * 0.15,
        }}
      />
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 14,
          fontWeight: '400',
          marginVertical: 5,
          lineHeight: 20,
        }}>
        Cappuccino
      </Text>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 9,
          fontWeight: '400',
          marginVertical: 5,
          lineHeight: 20,
        }}>
        With Steamed Milk
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: '600',
            lineHeight: 20,
          }}>
          $ 4.20
        </Text>
        <Image source={require('../assets/images/addToCart.png')} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default MenuItem;
