import React,{useState} from 'react';
import { SafeAreaView, View, Text, Button,TextInput } from 'react-native';

const number = 55;

const First = (props) => {
    const [userName,setuserName]=useState("")
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 40 }}>First</Text>
                <Text style={{ fontSize: 40 }}>{number}</Text>
    <Text>Girilen değer :{userName}</Text>
                <View style={{backgroundColor:"#e0e0e0",padding:10,margin:10}}>
                    <TextInput
                        value={userName}
                        onChangeText={text=>setuserName(text)}
                    />
                </View>
                <Button
                    title="Go!"
                    onPress={() => props.navigation.navigate('SecondPage', {
                        selectedValue: userName
                    })}
                />
            </View>
        </SafeAreaView>
    );
}

export default First;
