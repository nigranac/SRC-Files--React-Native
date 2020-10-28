  
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Component_B = (props) => {
    const ourCounter = useSelector(onur => onur.counter)
    const myName = useSelector(onur => onur.name)

    return (
        <View style={{ backgroundColor: '#bdbdbd', flex: 1 }}>
            <Text>Component_B</Text>
            <Text style={{ fontSize: 50 }}>Counter: {ourCounter}</Text>
            <Text style={{ fontSize: 50 }}>NAME: {myName}</Text>

        </View>
    );
};

export default Component_B;