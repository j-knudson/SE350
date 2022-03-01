/* Template */
/* credits: https://www.codementor.io/@jasonriveraqwerty/how-do-i-use-tabview-in-react-native-1iioc93dg4 */
import * as React from 'react';
import {
    Alert,
    Button,
    StyleSheet,
    Image,
    View,
    useWindowDimensions,
    Text,
    TouchableOpacity,
    TouchableOpacityComponent
} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';



/*const onFantasticPress = () => {
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
}*/

const FirstRoute = () => (
    //<View style={{ flex: 1, backgroundColor: 'grey', alignItems: 'center'}}>
    <View style={styles.container}>
        <View style={styles.touchableContainer}>
               <TouchableOpacity style={styles.bigContainer} onPress={()=> alert("Pancakes are terrible pick again")}>
                <Text style={styles.text}>Pancake</Text>
                    <Image
                        style={styles.tinyLogo}
                        //resizeMode={"contain"}
                        source={require('./assets/pancake.jpg')}
                    />
               </TouchableOpacity>
            <TouchableOpacity style={styles.bigContainer} onPress={()=> alert("Pretty Delicious: $5.00")}>
                <Text style={styles.text}>Waffle</Text>
                <Image
                    style={styles.tinyLogo}
                    //resizeMode={"contain"}
                    source={require('./assets/waffle.jpg')}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.touchableContainer}>

            <TouchableOpacity style={styles.bigContainer} onPress={()=> alert("French toast is the best: $10")} >
                <Text style={styles.text}>F.T.</Text>
                <Image
                    style={styles.tinyLogo}
                    //resizeMode={"contain"}
                    source={require('./assets/french_toast.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bigContainer} onPress={()=> alert("Cut the Crepe: $7.00")}>
                <Text style={styles.text}>Crepe</Text>
                <Image
                    style={styles.tinyLogo}
                    //resizeMode={"contain"}
                    source={require('./assets/crepe.jpg')}
                />
            </TouchableOpacity>
        </View>
    </View>

);
const SecondRoute = () => (
    <View style={styles.container}>
        <View style={styles.touchableContainer}>
            <TouchableOpacity style={styles.bigContainer} onPress={()=> alert("Pizza $30.00")}>
                <Text style={styles.text}>Pizza</Text>
                <Image
                    style={styles.tinyLogo}
                    //resizeMode={"contain"}
                    source={require('./assets/pizza.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bigContainer} onPress={()=> alert("Fried Chicken: $20.00")}>
                <Text style={styles.text}>Chicken</Text>
                <Image
                    style={styles.tinyLogo}
                    //resizeMode={"contain"}
                    source={require('./assets/chicken.jpg')}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.touchableContainer}>

            <TouchableOpacity style={styles.bigContainer} onPress={()=> alert("Get your burger: $19.99")} >
                <Text style={styles.text}>Burger</Text>
                <Image
                    style={styles.tinyLogo}
                    //resizeMode={"contain"}
                    source={require('./assets/burger.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bigContainer} onPress={()=> alert("Everything but the kitchen sink: $1000.00")}>
                <Text style={styles.text}>The Works</Text>
                <Image
                    style={styles.tinyLogo}
                    //resizeMode={"contain"}
                    source={require('./assets/works.jpg')}
                />
            </TouchableOpacity>
        </View>
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
          style={{marginTop:25,backgroundColor:'red'}}
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
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
        //justifyContent: 'space-evenly',
    },
    middleTab: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleText: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        //adjustsFontSizeToFit: 'true',

    },
    tinyLogo: {
        width: '100%',
        height: '50%',
        resizeMode:'cover'
    },
    bigContainer: {
        flex: 1,
        flexDirection: "column",
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    rightTab: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "red",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",

    }
});