import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';



function WelcomeScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] =  useState('');
    return (
        <ImageBackground
            resizeMode={"contain"}
            style={styles.background}
            source={require('../assets/rebel_empire.jpg')}
        >

            <Image style={styles.logo} source={require('../assets/crossed_sabers.jpg')} resizeMode={"contain"}/>

{/*            <View style={styles.logo}>
                <Image
                    style={styles.loginButton}
                    source={require('../assets/crossed_sabers.jpg')}
                    resizeMode={"contain"}/>
            </View>*/}
            <View style={styles.loginEmailButton}>
                <TextInput
                    style={styles.text}
                    placeholder ="Imperial Email"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.loginPasswordButton}>
                <TextInput
                    style={styles.text}
                    placeholder ="Code Clearance"
                    secureTextEntry={true}
                    onChangeText={(email) => setPassword(email)}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgotText}> Forgot Clearance Code?</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        justifyContent: "flex-end",
        alignItems: "center",
    },
    forgotPassword: {
        width: '100%',
        height: 70,
        backgroundColor: 'black',
    },
    forgotText: {
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 22
    },
    loginButton: {
        alignContent: "center",
        position: "absolute",
        top: 50,

    },
    loginEmailButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'red',
    },
    loginPasswordButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'limegreen',
    },
    logo: {
      width: '25%',
      height: '25%',
      position: 'absolute',
      top: 50,
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#000000c0"
    }

});

export default WelcomeScreen;