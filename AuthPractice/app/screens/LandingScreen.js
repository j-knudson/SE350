import {Button, StyleSheet, Text, View} from "react-native";


//function LandingScreen(props) {



 const LandingScreen =( {route, navigation} ) => {
     const {itemID, newEmail: passwordIs, testString} = route.params
     const testPress = () => {
        navigation.navigate('Welcome')
    }
    return (

        <View style={{justifyContent: "center", alignContent: "center",}}>
            {/*<Text style={{fontSize: 50, fontWeight: "bold",}}>Landing Screen Test</Text>*/}
            <Text>It's an older code, sir, but it checks out</Text>
            <Text>Email: {JSON.stringify(itemID)}</Text>
            <Text>Password: {JSON.stringify(passwordIs)}</Text>
            <Text>Test: {JSON.stringify(testString)}</Text>
            <Button
                title={'Landing Screen Test'}
                onPress={testPress}
            />
        </View>
    );
}



export default LandingScreen;