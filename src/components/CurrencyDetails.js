import React from 'react';
import { Text,View,Image,Linking } from 'react-native';

import {CardSection,Card,Button} from './common';

const CurrencyDetails  = ({currency,Nomination})=> {

  const {available_supply,id,last_updated,market_cap_usd,name,percent_change_1h,percent_change_7d,percent_change_24h,price_btc,price_usd,rank,symbol,total_supply}= currency;
  
  const {thumbnailStyle,headerContentStyle,thumbnailContainerStyle,headerTextStyle,imageStyle}= styles;
      
  return (
        <Card>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Image source={{uri:'https://coincap.io/images/coins/'+id+'.png'}} style={thumbnailStyle} />
            </View>

            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{name}</Text>
              <Text>{symbol+' '+percent_change_24h+' %'}</Text>  
            </View>

            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{price_usd+' '+Nomination} </Text>
              <Text>{'volume'+''}</Text>  
            </View>
          </CardSection>


        </Card>
    );

};

const styles={
  headerContentStyle: {
    flexDirection:'column',
    justifyContent:'flex-start',
    flex:1
  },
  headerContentStyleRight: {
    flexDirection:'column',
    justifyContent:'flex-end',
    flex:1
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