import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>Results: {results.length}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => 
                navigation.navigate('ResultsShow', { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },
  count: {
    marginLeft: 15,
    marginBottom: 5,
    color: 'grey'
  },
  container: {
    marginBottom: 10,
  }
});

export default withNavigation(ResultsList);
