/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

export default function ActionCard(): JSX.Element {
  function openLink(webLink: string) {
    Linking.openURL(webLink);
  }
  return (
    <View>
      <Text style={styles.textHeading}>Action Cards</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.heading}>Taj Mahal</Text>
        <Image
          source={{
            uri: 'https://tse1.mm.bing.net/th?id=OIP.TXlEs3JCXlV4WxCwadThrwHaE7&pid=Api&P=0&h=180',
          }}
          style={styles.cardImage}
        />
        {/* <View style={styles.cardBody}> */}
        <Text numberOfLines={2} style={styles.cardBody}>
          Taj Mahal is a famous tourist place in Agra. And also it is one of the
          world 8 wonders. It is built by Shah jahan in the memorial of his
          wife.
        </Text>
        {/* </View> */}
        {/* <View > */}
        <TouchableOpacity style={styles.cardFooter}>
          <Text
            onPress={() => openLink('https://en.wikipedia.org/wiki/Taj_Mahal')}
            style={styles.footerText}>
            Read more
          </Text>
          <Text
            onPress={() => openLink('https://github.com/ChanduPingili')}
            style={styles.footerText}>
            Follow me
          </Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card: {
    // height: 600,
    margin: 10,
    marginBottom: 20,
    backgroundColor: '#67E6DC',
    paddingBottom: 10,
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
  },
  cardBody: {
    padding: 10,
    color: 'black',
    fontSize: 18,
  },
  heading: {
    fontSize: 30,
    margin: 10,
    textAlign: 'center',
    color: 'black',
    flexGrow: 1,
    fontWeight: '500',
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    margin: 8,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    color: '#B83227',
  },
});
