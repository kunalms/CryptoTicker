import React from 'react';
import { Text,View,Image,Linking } from 'react-native';

import {CardSection,Card,Button} from './common';
import * as FormatUtil from '../Utils/format';

const CurrencyDetails  = ({currency,Nomination})=> {
  
  const {available_supply,id,last_updated,market_cap_usd,name,percent_change_1h,percent_change_7d,percent_change_24h,price_btc,price_usd,rank,symbol,total_supply}= currency;
   
  const {thumbnailStyle,headerContentStyleLeft,thumbnailContainerStyle,headerTextStyleGreen,
    headerTextStyleRed,imageStyle,headerContentStyleRight,greenText,redText}= styles;
  
  const selectedCurrency='price_'+Nomination.toLowerCase();//fetch the index of the selected currency

  const selectedCurrencyPrice=currency[selectedCurrency];//fetch the value form props

  if(percent_change_24h>0){

    return (
        <Card>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image source={{uri:'https://coincap.io/images/coins/'+id+'.png'}} style={thumbnailStyle} />
            </View>

            <View style={headerContentStyleLeft}>
              <Text style={headerTextStyleGreen}>{name}</Text>
              <Text style={greenText}>{symbol+' '+FormatUtil.getFormattedPercentage(percent_change_24h)}</Text>  
            </View>

            <View style={headerContentStyleRight}>
              <Text style={greenText}>{FormatUtil.getFormattedCurrencyPrice(selectedCurrencyPrice)+' '+Nomination}</Text>
              <Text style={greenText}>{'volume :'+FormatUtil.getFormattedVolume(currency['24h_volume_usd'])}</Text>  
            </View>
          </CardSection>


        </Card>
    );
  }
  else{
    return (
        <Card>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image source={{uri:'https://coincap.io/images/coins/'+id+'.png'}} style={thumbnailStyle} />
            </View>

            <View style={headerContentStyleLeft}>
              <Text style={headerTextStyleRed}>{name}</Text>
              <Text style={redText}>{symbol+' '+FormatUtil.getFormattedPercentage(percent_change_24h)}</Text>  
            </View>

            <View style={headerContentStyleRight}>
              <Text style={redText}>{FormatUtil.getFormattedCurrencyPrice(selectedCurrencyPrice)+' '+Nomination}</Text>
              <Text style={redText}>{'volume :'+FormatUtil.getFormattedVolume(currency['24h_volume_usd'])}</Text>  
            </View>
          </CardSection>
        </Card>
    );
  }

  

};

const styles={
  
  headerContentStyleLeft: {
    flexDirection:'column',
    justifyContent:'space-between',
    flex:1
  },
  headerContentStyleRight: {
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'flex-end',
    flex:1,
  },
  headerTextStyleGreen:{
    fontSize:18,
    color:'green',
  },
  headerTextStyleRed:{
    fontSize:18,
    color:'red',
  },
  greenText:{
    color:'green',
  },
  redText:{
    color:'red',
  },
  thumbnailStyle:{
    height:50,
    width:50,
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10,

  },

  imageStyle:{
    height:300,
    flex:1,
    width:null,

  }
};

export default CurrencyDetails; 