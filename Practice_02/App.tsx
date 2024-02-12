/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import DetailedCard from './components/DetailedCard';
import ActionCard from './components/ActionCard';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <DetailedCard/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
