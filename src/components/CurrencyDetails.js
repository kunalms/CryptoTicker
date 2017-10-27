import React from 'react';
import { Text,View,Image,Linking } from 'react-native';

import {CardSection,Card,Button} from './common';
import * as FormatUtil from '../Utils/format';

const CurrencyDetails  = ({currency,Nomination})=> {
  
  const {available_supply,id,last_updated,market_cap_usd,name,percent_change_1h,percent_change_7d,percent_change_24h,price_btc,price_usd,rank,symbol,total_supply}= currency;
   
  const {thumbnailStyle,headerContentStyleLeft,thumbnailContainerStyle,headerTextStyle,imageStyle,headerContentStyleRight}= styles;
  
  const selectedCurrency='price_'+Nomination.toLowerCase();//fetch the index of the selected currency

  const selectedCurrencyPrice=currency[selectedCurrency];//fect the value form props

  return (
        <Card>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image source={{uri:'https://coincap.io/images/coins/'+id+'.png'}} style={thumbnailStyle} />
            </View>

            <View style={headerContentStyleLeft}>
              <Text style={headerTextStyle}>{name}</Text>
              <Text>{symbol+' '+FormatUtil.getFormattedPercentage(percent_change_24h)}</Text>  
            </View>

            <View style={headerContentStyleRight}>
              <Text>{FormatUtil.getFormattedCurrencyPrice(selectedCurrencyPrice)+' '+Nomination}</Text>
              <Text>{'volume :'+FormatUtil.getFormattedVolume(currency['24h_volume_usd'])}</Text>  
            </View>
          </CardSection>


        </Card>
    );

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
  headerTextStyle:{
    fontSize:18,
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