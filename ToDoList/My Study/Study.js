import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import {MyButton, MyInput,MyToDo} from './components';

const items = [];

const Study = () => {
  return (
    <SafeAreaView style={styles.general}>
        <MyToDo/>
      <View style={styles.container}>
        <MyInput />
        <MyButton />
      </View>
    </SafeAreaView>
  );
};

export default Study;

const styles = StyleSheet.create({
  general: {
    flex: 1,
    backgroundColor: '#37474F',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#B0BEC5',
    borderRadius: 10,
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.95,
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
