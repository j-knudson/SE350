import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert, useWindowDimensions} from 'react-native';
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
                (index) => {return index }
            }
            data={
                [
                    {
                        name: 'Waffle',
                        id: '1',
                        cost: '$5.00',
                        description: 'No waffle puns',
                        image: require("./assets/waffle.jpg")
                    },
                    {
                        name: 'Pancake',
                        id: '2',
                        cost: 'Try again',
                        description: 'Pancakes are terrible. No Pun for you.',
                        image: require("./assets/pancake.jpg")
                    },
                    {
                        name: 'French Toast',
                        id: '3',
                        cost: '$10.00',
                        description: 'Lack toast intolerant',
                        image: require("./assets/french_toast.jpg")
                    },
                    {
                        name: 'Crepe',
                        id: '4',
                        cost: '$8.00',
                        description: 'Cut the crepe',
                        image: require("./assets/crepe.jpg")
                    },
                ]
            }
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.breakfastItem} onPress={()=> pressHandler(item)}>
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
                (index) => {return index }
            }
            data={
                [
                    {
                        name: 'Pizza',
                        id: '1',
                        cost: '$15.00',
                        description: 'Slice to meet you',
                        image: require("./assets/pizza.jpg")
                    },
                    {
                        name: 'Chicken',
                        id: '2',
                        cost: '$12.00',
                        description: "Leg`n Dairy",
                        image: require("./assets/chicken.jpg")
                    },
                    {
                        name: 'Cheeseburger',
                        id: '3',
                        cost: '$14.00',
                        description: "I'm on a roll",
                        image: require("./assets/burger.jpg")
                    },
                    {
                        name: 'The Works',
                        id: '4',
                        cost: '$1,000,000.00',
                        description: 'Everything but the kitchen sink',
                        image: require("./assets/works.jpg")
                    },
                ]
            }
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.dinnerItem} onPress={()=> pressHandler(item)}>
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
        { key: 'first', title: 'Breakfast' },
        { key: 'second', title: 'Dinner' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'white'}
            inactiveColor={'black'}
            style={{marginTop:75,backgroundColor:'darkgray'}}
        />
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
    breakfastItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //height: 80,
        margin: 2,
        backgroundColor: 'cadetblue',
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'white',
        //resizeMode: 'cover'
    },
    dinnerItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //height: 80,
        margin: 2,
        backgroundColor: 'tomato',
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