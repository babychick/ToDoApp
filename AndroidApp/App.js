import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ToDoList } from './src/components/ToDoList';
import AppContainer from './src/components/StackNavigator';
import { MainMenu } from './src/components/MainMenu';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
        {/* <MainMenu/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 24,
    backgroundColor: '#fff',
  }
});
