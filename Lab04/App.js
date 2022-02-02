/* Template */
/* credits: https://www.codementor.io/@jasonriveraqwerty/how-do-i-use-tabview-in-react-native-1iioc93dg4 */
import * as React from 'react';
import { StyleSheet,Image, View, useWindowDimensions, Text} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    //<View style={{ flex: 1, backgroundColor: 'grey', alignItems: 'center'}}>
    <View style={styles.bigContainer}>
      <Text style={styles.text}>Howdy</Text>
      <Image
          style={styles.tinyLogo}
          //resizeMode={"contain"}
          source={require('./assets/bebop.jpg')}
      />
    </View>
);
const SecondRoute = () => (
    //<View style={{ flex: 1, backgroundColor: 'darkgrey'}} >
    <View style={styles.middleTab}>
        <Text style={styles.middleText}>Who isn't great with a cat on their head?</Text>
      <Image style={styles.tinyLogo} source={require('./assets/spikecat.jpg')} />
    </View>
);
const ThirdRoute = () => (
    <View style={styles.rightTab}>
        <Text style={styles.text}>Sad Face</Text>
        <Image style={styles.tinyLogo} source={require('./assets/spikesad.jpg')} />
    </View>
);
export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Howdy' },
    { key: 'second', title: 'Great' },
    { key: 'third', title: 'Sad' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => (
      <TabBar
          {...props}
          activeColor={'white'}
          inactiveColor={'black'}
          style={{marginTop:50,backgroundColor:'red'}}
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
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '75%',
        height: '75%',
        resizeMode:'cover'
    },
    bigContainer: {
        flex: 1,
        flexDirection: "column",
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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