import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const pressFunction = () => {
   //------Spread Operator--------

   const user = {
     name:"Can",
     age:28,
     isAdmin: false
   }

   const member = {
     ...user,
     password:"12345",
     type: null
   }
  //  console.log(user)
  //  console.log(member)

   //------Destruction Operator------
   const myObject={
     url:"www.google.com",
     data:[1,2,3],
     config:"EMPTY"
   }

   const {config ,url} = myObject;
   console.log(config);
   console.log(url);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello React Native CLARUSWAY</Text>
        <Button title="Log" onPress={pressFunction}/>
      </View>
    </SafeAreaView>
  );
};

export default App;
