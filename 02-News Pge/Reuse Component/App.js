import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import ImageBox from './components/ImageBox';
const images = [
  {
    id:0,
    img: require("./images/start.jpg"),
    text:'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'AMELIA EARHART',
  },
  {
    id:1,
    img: require("./images/light.jpg"),
    text:'As you struggle forward in the days and weeks ahead, remind yourself, it is far better to be exhausted from lots of effort, learning and growth, than it is to be tired of doing absolutely nothing.',
    author: 'ANGEL CHERNOFF',
  },
  {
    id:2,
    img: require("./images/system.jpg"),
    text:'You can never understand everything. But, you should push yourself to understand the system.',
    author: 'RYAN DAHL (Creator of Node JS)',
  },
  {
    id:3,
    img: require("./images/impossible.jpg"),
    text:'Nothing is impossible; there are ways that lead to everything, and if we had sufficient will we should always have sufficient means. It is often merely for an excuse that we say things are impossible.',
    author: 'FRANCOIS DE LA ROCHEFOUCAULD',
  },
  {
    id:4,
    img: require("./images/struggle.png"),
    text:'The brick walls are there for a reason. The brick walls are not there to keep us out. The brick walls are there to give us a chance to show how badly we want something. Because the brick walls are there to stop the people who dore there to stop the other people.',
    author: 'RANDY PAUSCH',
  }
]
const App = () => {
  return (
    <ScrollView>
    <SafeAreaView style={{backgroundColor:"#3d3833",flex:1}}>
      <View>
        <Text style={styles.header}>THE LEADERSHIP'S JOURNEY</Text>
      </View>
      {images.map((image) => {
        return (
          <ImageBox
          img = {image.img}
          text = {image.text}
          author = {image.author}
          />
        );
      })}
    </SafeAreaView>
    </ScrollView>
  );
};
const styles= StyleSheet.create({
  header:{
    textAlign:"center",
    fontSize:27,
    fontWeight:"bold",
    color:"#e87e0d",
    margin:10,
    borderBottomColor:"#e87e0d",
    borderBottomWidth:1   
  },
});
export default App;