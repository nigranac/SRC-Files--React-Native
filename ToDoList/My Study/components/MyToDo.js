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

const MyToDo = () => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>Burası Neresi</Text>
    </View>
  );
};

export {MyToDo};

const styles = StyleSheet.create({
  todoContainer: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'red',
    marginTop: 10,
    backgroundColor: '#546E7A',
    width: Dimensions.get('window').width * 0.95,
  },
  todoText: {
    color: 'white',
    fontSize: 25,
  },
});
