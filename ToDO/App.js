import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './app/componants/Main'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
