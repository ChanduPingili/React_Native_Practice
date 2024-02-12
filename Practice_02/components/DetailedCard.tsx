/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function DetailedCard(): JSX.Element {
  return (
    <View>
      <Text style={styles.textHeading}>Detailed Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://static.toiimg.com/photo/69144907/GettyImages-518256134.jpg?width=748&resize=4',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.heading}>Charminar</Text>
          <Text style={styles.label}>Hyderabad , city of Pearls</Text>
          <Text style={styles.description}>
            Charminar is a famous tourist place in Hyderabad which is
            constructed during Nizam time.
          </Text>
          <Text style={styles.time}>10 mins more</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft:10,
  },
  card: {
    // height: 600,
    margin: 10,
    marginBottom: 20,
    backgroundColor: '#EAF0F1',
  },
  elevatedCard: {
    elevation: 8,
    borderRadius: 10,
    borderColor: 'red',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#74B9FF',
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  cardImage: {
    marginBottom: 8,
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  heading: {
    fontSize: 30,
    marginBottom: 8,
    color: 'black',
    flexGrow:1,
  },
  label: {
    fontSize: 26,
    marginBottom: 8,
  },
  description: {
    color: 'black',
    fontSize: 22,
    marginBottom: 8,
    flexShrink:1,
  },
  time: {
    fontSize: 20,
    marginBottom: 8,
  },
});
