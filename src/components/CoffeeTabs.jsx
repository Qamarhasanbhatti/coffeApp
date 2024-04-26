import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';


const CoffeeTabs = () => {
    const coffeeTypes = ['All','Espresso', 'Latte', 'Cappuccino', 'Americano', 'Mocha', 'Macchiato'];
    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabPress = (index) => {
      setActiveTab(index);
    };
  
    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {coffeeTypes.map((coffee, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleTabPress(index)}
              style={[
                styles.tab,
                index === activeTab ? styles.activeTab : styles.inactiveTab,
              ]}
            >
              <Text style={index === activeTab ? styles.activeText : styles.inactiveText}>
                {coffee}
              </Text>
              <View style={[{width:8,height:8,borderRadius:20,marginTop:5},
            index === activeTab ? styles.activeDot : styles.inactiveDot,
            ]}></View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      paddingHorizontal: 10,
    },
    tab: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginRight: 10,
      alignItems:"center"
    //   borderRadius: 20,
    //   borderWidth: 1,
    //   borderColor: '#D17842',
    },
    activeTab: {
    //   backgroundColor: '#D17842',
    //   borderColor: '#D17842',
    },
    inactiveTab: {
      backgroundColor: 'transparent',
    },
    activeText: {
      color: '#D17842',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize:14,
    },
    inactiveText: {
      color: '#52555A',
      textAlign: 'center',
      fontSize:14,
      fontWeight:"600"
    },
    activeDot:{
        backgroundColor:"#D17842"
    },
    inactiveDot:{
        backgroundColor:"#0c0f14"
    }
  });
  
  export default CoffeeTabs;
  