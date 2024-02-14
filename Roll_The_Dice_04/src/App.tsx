/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import imageOne from '../assets/One.png';
import imageTwo from '../assets/Two.png';
import imageThree from '../assets/Three.png';
import imageFour from '../assets/Four.png';
import imageFive from '../assets/Five.png';
import imageSix from '../assets/Six.png';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

type DiceProps = PropsWithChildren<{
  urlImage: ImageSourcePropType;
}>;

const Dice = ({urlImage}: DiceProps): JSX.Element => {
  return <Image style={styles.diceImage} source={urlImage} />;
};
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export default function App() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(imageOne);

  const rollTheDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(imageOne);
        break;
      case 2:
        setDiceImage(imageTwo);
        break;
      case 3:
        setDiceImage(imageThree);
        break;
      case 4:
        setDiceImage(imageFour);
        break;
      case 5:
        setDiceImage(imageFive);
        break;
      case 6:
        setDiceImage(imageSix);
        break;

      default:
        setDiceImage(imageOne);
        break;
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Dice urlImage={diceImage} />
      <Pressable onPress={rollTheDice}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
