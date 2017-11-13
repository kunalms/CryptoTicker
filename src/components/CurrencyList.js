import React, { Component } from 'react';
import { ScrollView,View,Picker, RefreshControl,Image,TouchableWithoutFeedback,Linking} from 'react-native';
import axios from 'axios';


import CurrencyDetails from './CurrencyDetails';
import {Header,Footer} from './common'

export default class CurrencyList extends Component {
	state={currencies:[],Nomination:'USD',refreshing:true,NumberToFetch:'50'};

  	componentWillMount(){
	  	this.fetchCurrency();
	 }

	 fetchCurrency =()=>{
	 	this.setState({refreshing:true});
	 	axios.get('https://api.coinmarketcap.com/v1/ticker/?convert='+this.state.Nomination+'&limit='+this.state.NumberToFetch)
      	.then(response=>this.setState({currencies:response.data,refreshing:false}));
	 }

	 updateCurrency = (Nomination) => {
	 	this.setState({Nomination:Nomination,refreshing:true});
	 	console.log('https://api.coinmarketcap.com/v1/ticker/?convert='+Nomination+'&limit='+this.state.NumberToFetch);
	 	axios.get('https://api.coinmarketcap.com/v1/ticker/?convert='+Nomination+'&limit='+this.state.NumberToFetch)
      	.then(response=>this.setState({currencies:response.data,refreshing:false}));
   	
   	}


   	updateNumberToFetch = (NumberToFetch) => {
	 	this.setState({NumberToFetch:NumberToFetch,refreshing:true});
	 	if(NumberToFetch==='all'){
		 	console.log('https://api.coinmarketcap.com/v1/ticker/?convert='+this.state.Nomination+'&limit=0');
		 	axios.get('https://api.coinmarketcap.com/v1/ticker/?convert='+this.state.Nomination+'&limit=0')
	      	.then(response=>this.setState({currencies:response.data,refreshing:false}));	
	 	}
	 	else{
		 	console.log('https://api.coinmarketcap.com/v1/ticker/?convert='+this.state.Nomination+'&limit='+NumberToFetch);
		 	axios.get('https://api.coinmarketcap.com/v1/ticker/?convert='+this.state.Nomination+'&limit='+NumberToFetch)
	      	.then(response=>this.setState({currencies:response.data,refreshing:false}));
	   	}
   	}

	 renderCurrencies(){
	 	console.log(this.state);
	 	return this.state.currencies.map(currency=>
	 		<CurrencyDetails  
	 		 key={currency.id} 
	 		 currency={currency} Nomination={this.state.Nomination}/>
	 	);
	 }

  


  	render() {
  		console.log(this.state);
	    return (
	    	<View style={{flex:1}}>
        	  <Header headerText="CryptoTicker"/>
        
		    	<View style={{flex:10,marginBottom:45,paddingBottom:5	}}>
		    	<ScrollView 
		    		refreshControl={<RefreshControl refreshing={this.state.refreshing} 
		    		onRefresh={this.fetchCurrency.bind(this)} 
		    		tintColor="#EBEBEB"
					title="Loading..."
					colors={['#ff0000', '#00ff00', '#0000ff']}
					progressBackgroundColor="#EBEBEB"/>}>
		      		{this.renderCurrencies()}
		    	</ScrollView>
		    	</View>

		    	<Footer>
		          <View style={styles.containerStyle}>
		          	

		          	<Picker style={styles.itemPickerStyle} selectedValue={this.state.NumberToFetch} onValueChange={this.updateNumberToFetch.bind(this)}>
		          		<Picker.Item label="10" value="10"/>
		          		<Picker.Item label="20" value="20"/>
		          		<Picker.Item label="50" value="50"/>
		          		<Picker.Item label="100" value="100"/>
		          		<Picker.Item label="200" value="200"/>
		          		<Picker.Item label="250" value="250"/>
		          		<Picker.Item label="500" value="500"/>
		          		<Picker.Item label="1000" value="1000"/>
		          		<Picker.Item label="all" value="all"/>
		          	</Picker>

		          	<TouchableWithoutFeedback onPress={()=> Linking.openURL('https://github.com/kunalsharma6996/CryptoTicker')}>
		          	<Image source={{uri:'https://images.sftcdn.net/images/t_optimized,f_auto/p/341c5968-96d8-11e6-bbd4-00163ec9f5fa/1961917216/github-for-windows-logo.png'}} 
		          	style={styles.thumbnailStyle} />
		          	</TouchableWithoutFeedback>
		          	

		          	<Picker style={styles.currencyPickerStyle} selectedValue = {this.state.Nomination} onValueChange = {this.updateCurrency.bind(this)}>
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
		            </Picker>
		          </View>
		        </Footer>	
	    	</View>
	    );
  	}
}

const styles ={
	containerStyle:{
		flex:1,
		flexDirection:'row',
		justifyContent:'space-between'
	},

	currencyPickerStyle:{
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
	itemPickerStyle:{
		borderWidth:1,
		borderRadius:2,
		borderColor:'#ddd',
		borderBottomWidth:0,
		width:100,
		shadowColor:'#000',
		shadowOffset: {width:0,height:0},
		shadowOpacity:0.2,
		shadowRadius:2,
		elevation:1,
		marginLeft:5,
		marginRight:5,
		marginTop:10,	
	},
	thumbnailStyle:{
    marginTop:10,
    height:40,
    width:40,
  },
};


