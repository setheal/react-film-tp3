/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class ListFilmItem extends Component {
  render() {
    console.log(this.props.posterUrl);
    return (
      <View style={styles.container}>
        <Image
          source={ this.props.posterUrl }
          style={ styles.poster }
          resizeMode='contain'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    height: 400,
    width: null,
  },
});
