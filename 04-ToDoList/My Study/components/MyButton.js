import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const MyButton = () => {
    const dataİtems=()=>{
        console.log("merhaba")
    }
  return (
    <TouchableOpacity style={styles.generalStyle}
                onPress={dataİtems}>
      <Text style={styles.textStyle}>ADD TODO</Text>
    </TouchableOpacity>
  );
};

export {MyButton};

const styles = StyleSheet.create({
  generalStyle: {
    backgroundColor: '#546E7A',
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.06,
    justifyContent: 'center',
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
