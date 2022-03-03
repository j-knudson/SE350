//SE350 Midterm Part 1   Written by John Knudson
//Tab Template Credits are:
/* Template */
/* credits: https://www.codementor.io/@jasonriveraqwerty/how-do-i-use-tabview-in-react-native-1iioc93dg4 */

import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert, useWindowDimensions, Modal} from 'react-native';
import React, { useState } from 'react';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';


const pressHandler = (item) => {
  console.log(item.id);
  alert(item.description+"\n\n"+item.cost)
}

const FirstRoute = () => (

    <View style={styles.container}>
      <FlatList
          numColumns = {2}
          keyExtractor={
            item => item.id
          }
          data={
            [
              {
                name: 'Star Wars',
                id: '1',
                cost: '$5.00',
                description: 'Which program do Jedi use to open PDF files?\nAdobe Wan Kenobi.',
                image: require("./assets/a_new_hope.jpg")
              },
              {
                name: 'Empire Strikes Back',
                id: '2',
                cost: '$20.00',
                description: 'Some Like it Hoth',
                image: require("./assets/empire.jpg")
              },
              {
                name: 'Return of the Jedi',
                id: '3',
                cost: '$10.00',
                description: 'Ewok the Line',
                image: require("./assets/jedi.jpg")
              },
              {
                name: 'Spaceballs',
                id: '4',
                cost: '$8.00',
                description: 'Ludicrous Speed',
                image: require("./assets/spaceballs.jpg")
              },
            ]
          }
          renderItem={({ item }) => (
              <TouchableOpacity style={styles.moviesItem} onPress={()=> pressHandler(item)}>
                <Text style={styles.text}> {item.name} </Text>
                <Image
                    style={styles.tinyLogo}
                    source={item.image}
                />
              </TouchableOpacity>
          )}
      />
    </View>
);
const SecondRoute = () => (
    <View style={styles.container}>
      <FlatList
          numColumns = {2}
          keyExtractor={
            (item) => item.id
          }
          data={
            [
              {
                name: 'Beethoven',
                id: '5',
                cost: '$15.00',
                description: 'Symphony No. 9',
                image: require("./assets/beethoven.jpg")
              },
              {
                name: 'Bach',
                id: '6',
                cost: '$12.00',
                description: "The Brandenburg Concertos",
                image: require("./assets/bach.jpg")
              },
              {
                name: 'Mozart',
                id: '7',
                cost: '$14.00',
                description: "Serenade No. 13",
                image: require("./assets/mozart.jpg")
              },
              {
                name: 'A secret Mix-Tape!?!?!?!',
                id: '8',
                cost: '$1,000,000.00',
                description: 'Wow, so much awesome',
                image: require("./assets/composer_mix_tape.jpg")
              },
            ]
          }
          renderItem={({ item }) => (
              <TouchableOpacity style={styles.musicItem} onPress={()=> pressHandler(item)}>
                <Text style={styles.text}> {item.name} </Text>
                <Image
                    style={styles.tinyLogo}
                    source={item.image}
                />
              </TouchableOpacity>
          )}
      />
    </View>
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Movies' },
    { key: 'second', title: 'Music' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
      <View>
        <TabBar
            {...props}
            activeColor={'white'}
            inactiveColor={'black'}
            style={{marginTop:75,backgroundColor:'cadetblue'}}
        />
      </View>
  );

  return (
      <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
      />
  );
}


const styles = StyleSheet.create({
  moviesItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //height: 80,
    margin: 2,
    backgroundColor: 'thistle',
    resizeMode: 'contain'
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'white',
    //resizeMode: 'cover'
  },
  musicItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //height: 80,
    margin: 2,
    backgroundColor: 'salmon',
    resizeMode: 'cover'
  },
  text: {
    flex: 1,
    fontSize: 24,
    color: 'white',
  },
  tinyLogo: {

    width: '90%',
    height: 300,
    resizeMode: 'contain'
  },

});