import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, Pressable } from 'react-native';



export default function App() {
    const onFantasticPress = () => {
      Alert.alert('FantasticPress','Fantastic')
    }
    const onNicePress = () => {
      Alert.alert('NicePress', "Nice!")
    }
    const onSorryPress = () => {
        Alert.alert('SorryPress', "Sorry!")
    }
    const  onForgivePress = () => {
        Alert.alert('ForgivePress', "Forgive Us")
    }
  return (
  <View style={styles.bigContainer}>
    <View style={styles.container}>
    <TouchableOpacity onPress={()=> onFantasticPress()}>
        <Image
            style={styles.tinyLogo}
            source={require('./assets/happy.png')}
        />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> onNicePress()}>
            <Image
                style={styles.tinyLogo}
                source={require('./assets/smile.png')}
            />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> onSorryPress()}>
        <Image
            style={styles.tinyLogo}
            source={require('./assets/sad.png')}
        />
    </TouchableOpacity>

    <TouchableOpacity onPress={()=> onForgivePress()}>
        <Image
            style={styles.tinyLogo}
            source={require('./assets/angry.png')}
        />
    </TouchableOpacity>
{/*    <Pressable onPress={()=> onNicePress()}>
        <Text>Test Text</Text>
    </Pressable>*/}
    </View>
      <Text>How are you feeling? Click a button</Text>
  </View>



/*    <Text>How are you feeling? Click a button</Text>
      <StatusBar style="auto" />*/






  );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    bigContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
