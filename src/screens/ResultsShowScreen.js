import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if(!result) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{result.name}</Text>
        <View style={styles.contactInfo}>
          <Text>{result.phone}</Text>
          <Text>{ result.is_closed ? 'Open' : 'Closed' }</Text>
        </View>
      </View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }}/>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10
  },
  header: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#DFEEDD',
    borderColor: '#C2CDC0',
    borderWidth: 1
  },
  title: {
    paddingBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  contactInfo: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginVertical: 10
  }
});

export default ResultsShowScreen;
