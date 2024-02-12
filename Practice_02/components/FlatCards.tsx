/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function FlatCards():JSX.Element{
  return (
    <View>
      <Text style={styles.flatText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red Card</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green card</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue card</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  flatText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft:10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 8,
    height: 100,
    width: 100,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'lightgreen',
  },
  cardThree: {
    backgroundColor: 'skyblue',
  },
});
