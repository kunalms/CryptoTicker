/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import {Header} from './src/components/common';
import CurrencyList from './src/components/CurrencyList';

export default class App extends Component {
  render() {
    return (
        <View>
          <Header headerText="CryptoTicker"/>
          <CurrencyList />
        </View>
    );
  }
}

