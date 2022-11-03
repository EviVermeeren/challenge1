import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

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
      
      
      
      <StatusBar style="auto" />
    </View>
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
    marginLeft: 25,
  },

  title: {
    fontSize: 25,
    height: 40,
  },

  shoppingcart: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 0, 
    flexShrink: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginRight: 55,
  },

  icon: {
    height: 25,
    width: 25,
  }, 

  text: {
    marginTop: 5,
    marginLeft: 5,
  }
});

//hallo