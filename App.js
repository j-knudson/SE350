import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import React,{ Component } from 'react';
import {Alert, AppRegistry, Button, StyleSheet, Text, View} from 'react-native';

export default class ButtonBasics extends Component {
  onPressButton() {
    alert('You clicked the button!')
  }
    render() {
        return (
            <View style = {styles.container} >
                <View style = {styles.buttonContainer}>
                    <Button
                        onPress = {this.onPressButton}
                        title = "Press Me"
                    />
                </View>
                <View style = {styles.buttonContainer}>
                    <Button
                        onPress = {this.onPressButton}
                        title = "Press Me 2"
                        color = "#009933"
                    />
                </View>
                <View style = {styles.multiButtonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title = "A disabled button"
                        disabled = {true}
                    />
                    <Button
                        onPress={this.onPressButton}
                        title="OK!"
                        color="#009933"
                    />
                </View>
            </View>
        );
    }

}


/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Did Jake just get boomed?</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  multiButtonContainer: {
  margin: 20,
  flexDirection: 'row',
  justifyContent: 'space-between'
  }
});
