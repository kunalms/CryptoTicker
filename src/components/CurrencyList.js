import React, { Component } from 'react';
import { ScrollView,View,Picker} from 'react-native';
import axios from 'axios';

import CurrencyDetails from './CurrencyDetails';
import {Header,Footer} from './common'

export default class CurrencyList extends Component {
	state={currencies:[],Nomination:'USD'};

  	componentWillMount(){
	  	axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=250')
	  		.then(response=>this.setState({currencies:response.data}));
	  			console.log(this.state.currencies);
	 }


	 updateCurrency = (Nomination) => {
	 	this.setState({Nomination:Nomination});
	 	console.log('https://api.coinmarketcap.com/v1/ticker/?convert='+this.state.Nomination+'&limit=250');
	 	axios.get('https://api.coinmarketcap.com/v1/ticker/?convert='+this.state.Nomination+'&limit=250')
      	.then(response=>this.setState({currencies:response.data}));
	  	
	  	console.log(this.state.currencies);
   	
   	}

	 renderCurrencies(){

	 	return this.state.currencies.map(currency=>
	 		<CurrencyDetails  
	 		 key={currency.id} 
	 		 currency={currency} Nomination={this.state.Nomination}/>
	 	);
	 }


  	render() {
  		console.log(this.state);
	    console.log(Object.keys(this.state.currencies).length);
	    return (
	    	<View style={{flex:1}}>
        	  <Header headerText="CryptoTicker"/>
        
		    	<View style={{flex:10,marginBottom:35,paddingBottom:10}}>
		    	<ScrollView >
		      		{this.renderCurrencies()}
		    	</ScrollView>
		    	</View>

		    	<Footer>
		          <View style={styles.containerStyle}>
		          	<Picker selectedValue = {this.state.Nomination} onValueChange = {this.updateCurrency}>
		               <Picker.Item label = "US Dollar" value = "USD" />
		               <Picker.Item label = "Australian Dollar" value = "AUD" />
		               <Picker.Item label = "Brazilian Real Chart" value = "BRL" />
		               <Picker.Item label = "Canadian Dollar" value = "CAD" />
		               <Picker.Item label = "Swiss Franc" value = "CHF" />
		               <Picker.Item label = "Chilean Peso" value = "CLP" />
		               <Picker.Item label = "Chinese Yuan" value = "CNY" />
		               <Picker.Item label = "Czech Koruna" value = "CZK" />
		               <Picker.Item label = "Denmark Krone" value = "DKK" />
		               <Picker.Item label = "Euro" value = "EUR" />
		               <Picker.Item label = "Great Britain Pound" value = "GBP" />
		               <Picker.Item label = "Hong Kong Dollar" value = "HKD" />
		               <Picker.Item label = "Hungary Forint" value = "HUF" />
		               <Picker.Item label = "Indonesia Rupiah" value = "IDR" />
		               <Picker.Item label = "Israel New Shekel" value = "ILS" />
		               <Picker.Item label = "India Rupee" value = "INR" />
		               <Picker.Item label = "Japan Yen" value = "JPY" />
		               <Picker.Item label = "South Korea Won" value = "KRW" />
		               <Picker.Item label = "Mexico Peso" value = "MXN" />
		               <Picker.Item label = "Malaysia Ringgit" value = "MYR" />
		               <Picker.Item label = "Norway Kroner" value = "NOK" />
		               <Picker.Item label = "New Zealand Dollar" value = "NZD" />
		               <Picker.Item label = "Philippines Peso" value = "PHP" />
		               <Picker.Item label = "Pakistan Rupee" value = "PKR" />
		               <Picker.Item label = "Poland Zloty" value = "PLN" />
		               <Picker.Item label = "Russia Rouble" value = "RUB" />
		               <Picker.Item label = "Sweden Krona" value = "SEK" />
		               <Picker.Item label = "Singapore Dollar" value = "SGD" />
		               <Picker.Item label = "Thailand Baht" value = "THB" />
		               <Picker.Item label = "Turkish New Lira" value = "TRY" />
		               <Picker.Item label = "Taiwan Dollar" value = "TWD" />
		               <Picker.Item label = "South Africa Rand" value = "ZAR" />



		               <Picker.Item label = "Maria" value = "maria" />
		            </Picker>
		          </View>
		        </Footer>	
	    	</View>
	    );
  	}
}

const styles ={
	containerStyle:{
		borderWidth:1,
		borderRadius:2,
		borderColor:'#ddd',
		borderBottomWidth:0,

		width:150,

		shadowColor:'#000',
		shadowOffset: {width:0,height:0},
		shadowOpacity:0.2,
		shadowRadius:2,
		elevation:1,

		marginLeft:5,
		marginRight:5,
		marginTop:10,
	},
};


