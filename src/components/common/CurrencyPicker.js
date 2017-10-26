import React, { Component } from 'react';
import { View, Text, Picker} from 'react-native'

export default class CurrencyPicker extends Component {
   state = {Currency: ''}
   updateCurrency = (Currency)=> {
      this.setState({ Currency: Currency })
   }
   render() {
      return (
         <View>
            
         </View>
      )
   }
}

