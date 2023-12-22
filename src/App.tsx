import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';
import CustomIcon from './components/CustomIcon';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Yug</Text>
          <CustomIcon name="home" size={25} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
