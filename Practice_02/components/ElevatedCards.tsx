/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCards():JSX.Element{
  return (
    <View>
      <Text style={styles.TextHeading}>ElevatedCards</Text>
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>Hi</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>I'm</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>Chandu</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>stop</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard]}>
            <Text>scrolling</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextHeading: {
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  elevatedCard: {
    backgroundColor: 'white',
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 9,
    shadowOpacity: 0.6,
    shadowColor: 'blue',
  },
});
