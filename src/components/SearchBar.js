import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather
        style={styles.iconStyle}
        name="search"
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor:'#F0EEEE',
    borderRadius: 5,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 15,
    fontSize: 35,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  }
});

export default SearchBar;
