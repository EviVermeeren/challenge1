import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

function handlePress() {
  console.log("Iene Miene Mutte - GELEZEN");
}

import BookTile from './components/BookTile.js';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.head}>
        
        <View>
          <Text style={styles.title}>Bookshop</Text>
        </View>

        <View style={styles.shoppingcart}>
          <Image
              style={styles.icon}
              source={{uri: 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png'}}
            />
          <Text style={styles.text}>1</Text>
        </View>

      </View>

      <BookTile title="Iene Miene Mutte" author="M.J. Arlidge" description="Het meisje was amper nog in leven toen ze het bos uit kwam lopen. Het verhaal van haar ontvoering was donkerder dan de meest verschrikkelijke nachtmerrie. Maar alles wat ze zei was waar. Elk gruwelijk detail. Een aantal dagen later wordt een tweede in shock verkerend slachtoffer gevonden en ontstaat er een patroon. In tweetallen worden mensen ontvoerd, vastgehouden en uitgehongerd. Vervolgens krijgen ze een duivels dilemma voorgelegd: doden of gedood worden." isbn="978-9-0225-7622-9"/>
      
      <TouchableHighlight underlayColor="blue" onPress={() => handlePress()} style={styles.tile}>

        <View>
            <Text style={styles.tileText}>GELEZEN</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.line}/>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
  },

  head: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 0, 
    flexShrink: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 35,
  },

  title: {
    fontSize: 35,
    height: 55,
  },

  shoppingcart: {
    marginRight: 35,
    marginTop: 5,
  },

  icon: {
    height: 30,
    width: 30,
    marginTop: 8,
  }, 

  text: {
    marginLeft: 30,
    fontSize: 15,
  },

  tile: {
    borderRadius: 5,
    borderColor: '#B4B8DA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',
    padding: 10,
    width: 90,
    marginLeft: 290,
  }, 

  tileText: {
    textAlign: 'center',
    fontWeight: '500',
  }, 

  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: "90%",
    marginTop: 15,
    marginLeft: 20,
  }

});

//hallo