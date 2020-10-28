import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Component_A = (props) => {
  const myCounter = useSelector((ezran) => ezran.counter);
  const dispatch = useDispatch();

  return (
    <View style={{backgroundColor: '#eceff1', flex: 1}}>
      <Text>Component_A</Text>
      <Text style={{fontSize: 50}}>Counter: {myCounter}</Text>
      <View style={{marginVertical: 20}}>
        <Button
          title="Arttır"
          onPress={() => dispatch({type: 'INCREASE_COUNTER'})}
        />
      </View>
      <View style={{marginVertical: 20}}>
        <Button
          title="Azalt"
          onPress={() => dispatch({type: 'DECREASE_COUNTER'})}
        />
      </View>
      <View style={{marginVertical: 20,marginHorizontal:30,borderWidth:5,borderColor:"#4b2c20"}}>
        <Button
          title="B SAYFASINA Git"
          onPress={() => props.navigation.navigate('B')}
        />
      </View>
      <View
        style={{
          backgroundColor: '#ffa4a2',
          marginVertical: 20,
          justifyContent: 'center',
          marginHorizontal: 25
        }}>
        <TextInput
        style={{fontSize:20}}
          placeholder="Kullanıcı adı giriniz"
          placeholderTextColor="blue"
          onChangeText={(value) =>
            dispatch({type: 'INCREASE_COUNTER', payload: {name: value}})
          }
        />
      </View>
    </View>
  );
};

export default Component_A;
