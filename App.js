import React from 'react';
import {View, Text} from 'react-native';
import Heading from './src/components/Heading';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Heading headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};

export default App;
