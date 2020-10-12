import React from 'react';
import {SafeAreaView, View, Text, ScrollView, TextInput,Dimensions,StyleSheet} from 'react-native';

const MyInput = () => {
  return (
      <TextInput style={styles.InputStyle} />
  );
};

export {MyInput};

const styles = StyleSheet.create({
  InputStyle: {
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    width:Dimensions.get("window").width*0.8,
    height:Dimensions.get("window").height*0.05,
    alignSelf:"center"
  },
});
