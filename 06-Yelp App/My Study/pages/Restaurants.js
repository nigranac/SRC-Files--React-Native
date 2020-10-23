import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet, TextInput} from 'react-native';

import RestaurantCard from '../components/RestaurantCard';

const restaurants = [
  {
    id: 0,
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/07/aa/fa/70/cafe-murano.jpg',
    name: 'Cafe Murano',
    address: 'United Kingdom',
    city: 'Altanta',
  },
  {
    id: 1,
    image: 'https://images.otstatic.com/prod/24164531/1/large.jpg',
    name: 'Seasons 52 - Altamonte Springs',
    address: 'United Kingdom',
    city: 'Alton',
  },
  {
    id: 2,
    image:
      'https://d1ralsognjng37.cloudfront.net/779ea345-a3ec-45a5-a9c2-3a9c1442fcce.jpeg',
    name: "Miller's Ale House",
    address: 'United Kingdom',
    city: 'Altanta',
  },
  {
    id: 3,
    image:
      'https://cdn.usarestaurants.info/assets/uploads/e7cb0a9b5d7d1bf11a01895da1118c37_-united-states-florida-seminole-county-altamonte-springs-quickly-bistro-boba-407-630-6200htm.jpg',
    name: 'Quickly Bistro & Boba',
    address: 'United Kingdom',
    city: 'Alpine',
  },
  {
    id: 4,
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/08/4a/a0/37/the-crepevine.jpg',
    name: 'The Crepevine',
    address: 'United Kingdom',
    city: 'Alma',
  },
];

const Restaurants = ({route, navigation}) => {
  const {id, name} = route.params;
  const [searchValue, setSearchValue] = useState("");

  const [displayList, setDisplayList] = useState([]);

useEffect(() => {
  setDisplayList(restaurants)
}, [])


  useEffect(() => {
    const filteredValue = restaurants.filter(item => {
      const text = searchValue.toUpperCase();
      const cityName = item.name.toUpperCase();
      return cityName.indexOf(text) > -1;
    }); setDisplayList(filteredValue);
  },[searchValue])

  //   const [searchValue, setSearchValue] = useState("");
  // const [displayList, setDisplayList] = useState([]);

  // useEffect(() => {
  //   setDisplayList(restaurants);
  // }, []);

  // useEffect(() => {
  //   const filteredValue = restaurants.filter((item) => {
  //     //   const text = searchValue.toUpperCase();
  //     const cityName = item.city.toUpperCase();
  //     return cityName == name ? item : null;
  //   });
  //   setDisplayList(filteredValue);
  // }, [name]);

  //   {name} == restaurants.item.city ?
  // 
  const renderRestaurants = ({item}) => {
    if(item.city == name) {
    return (
      <RestaurantCard
        restaurant={item}
        onClick={() => navigation.navigate('RestaurantPage', item)}
      />
    );}
  };

  return (
    <SafeAreaView>
      <Text style={styles.text}>{name} Restaurants</Text>
      <TextInput
          value={searchValue}
          placeholder="Restoran arayin.."
          onChangeText={(searchText) => setSearchValue(searchText)}
        />
      <View>
        <FlatList data={displayList} renderItem={renderRestaurants} />
      </View>
    </SafeAreaView>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'brown',
    marginTop: 10,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: 'brown',
  },
});
