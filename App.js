import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import ListFilms from './Components/ListFilms';

export default class App extends React.Component {
  render() {
    return (
      <View style = {{ flex: 1 }}>
        <StatusBar
          barStyle = "default"
        />
        <View style={styles.content}>
          <ListFilms />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    
  }
});
