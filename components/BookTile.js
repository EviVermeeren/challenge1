import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

const BookTile = (props) => {
    return (
        <View style={styles.bookoverview}>
            <Text style={styles.booktitle}>{props.title}</Text>
            <Text style={styles.bookauthor}>van {props.author}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.isbn}>ISBN {props.isbn}</Text>

      </View>
    );
}

export default BookTile;

const styles = StyleSheet.create({

bookoverview: {
    marginTop: 20,
    marginLeft: 35,
  }, 

  booktitle: {
    fontSize: 25,
  }, 

  bookauthor: {
    fontSize: 18,
  }, 
  
  description: {
    marginTop: 15,
  }, 

  isbn: {
    marginTop: 15,
  }, 

});