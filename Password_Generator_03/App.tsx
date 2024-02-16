/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const passSchema = Yup.object().shape({
  passLength: Yup.number()
    .min(4, 'Password length should be minimum of 4')
    .max(16, 'Password should be at max 16')
    .required('length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [isNumeric, setIsNumeric] = useState(false);
  const [isSmallAlpha, setIsSmallAlpha] = useState(false);
  const [isCapAlpha, setIsCapAlpha] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  function passwordGenerator(passLength: number) {
    let charList = '';
    if (isNumeric) {
      charList += '1234567890';
    }
    if (isCapAlpha) {
      charList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (isSmallAlpha) {
      charList += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (isSymbol) {
      charList += '!@#$%^&*()_-+=/.,;{}:"<>?"]';
    }
    setIsPassGenerated(true);
    setPassword(generatePass(charList, passLength));
  }

  function generatePass(character: string, passLength: number): string {
    let res = '';
    for (let i = 0; i < passLength; i++) {
      let charInd = Math.round(Math.random() * character.length);
      res += character.charAt(charInd);
    }
    return res;
  }

  function reset() {
    setIsSymbol(false);
    setIsCapAlpha(false);
    setIsSmallAlpha(false);
    setIsNumeric(false);
    setIsPassGenerated(false);
    setPassword('');
  }

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passLength: ''}}
            validationSchema={passSchema}
            onSubmit={values => {
              passwordGenerator(+values.passLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password length</Text>
                    {touched.passLength && errors.passLength && (
                      <Text style={styles.errorText}>{errors.passLength}</Text>
                    )}
                  </View>
                  <TextInput
                    placeholder="Ex. 8"
                    keyboardType="numeric"
                    style={styles.inputStyle}
                    value={values.passLength}
                    onChangeText={handleChange('passLength')}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowercase letters</Text>
                  <BouncyCheckbox
                    disableBuiltInState={true}
                    isChecked={isSmallAlpha}
                    onPress={() => setIsSmallAlpha(!isSmallAlpha)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase letters</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isCapAlpha}
                    onPress={() => setIsCapAlpha(!isCapAlpha)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isNumeric}
                    onPress={() => setIsNumeric(!isNumeric)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isSymbol}
                    onPress={() => setIsSymbol(!isSymbol)}
                    fillColor="#FC80A5"
                  />
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                    style={styles.primaryBtn}
                    disabled={!isValid}
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      reset();
                    }}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text style={styles.generatedPassword} selectable={true}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});
