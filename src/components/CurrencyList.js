import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import CurrencyDetails from './CurrencyDetails';



export default class CurrencyList extends Component {
	state={currencies:[]};

  	componentWillMount(){
	  	axios.get('https://api.coinmarketcap.com/v1/ticker/')
	  		.then(response=>this.setState({currencies:response.data}));

	  		console.log("componentWillMount done");
	  	
	 }


	 renderAlbums(){
	 	return this.state.currencies.map(currency=>
	 		<CurrencyDetails key={currency.id} currency={currency}/>
	 	);
	 }


  	render() {
  		console.log(this.state);
	    return (
	    	<ScrollView >
	      		{this.renderAlbums()}
	    	</ScrollView>
	    );
  	}
}