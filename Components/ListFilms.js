import React, { Component } from 'React';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import ListFilmItem from './ListFilmItem';

export default class ListFilms extends Component {
  apiUrl = 'http://10.188.177.13:8000';

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch(this.apiUrl+'/films')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          films: responseJson,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
      if(this.state.isLoading) {
        return(<View style={ styles.loadingContainer }>
          <ActivityIndicator size="large" />
        </View>);
      }
      return(<FlatList
        data={ this.state.films }
        renderItem={({item}) => (
          <ListFilmItem
            title={item.title}
            posterUrl={{uri: this.apiUrl + item.poster }}
          />
        )}
      />)
  }

}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
