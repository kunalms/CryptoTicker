import React from 'react';
import { Text,View,Image,Linking } from 'react-native';

import {CardSection,Card,Button} from './common';

const CurrencyDetails  = ({currency})=> {

  const {id,name,symbol,rank,price_usd,price_btc,market_cap_usd,available_supply,total_supply,percent_change_1h,percent_change_24h,percent_change_7d,last_updated} = currency;

  const {thumbnailStyle,headerContentStyle,thumbnailContainerStyle,headerTextStyle,imageStyle}= styles;
  return (
        <Card>
          <CardSection>
            <View style={thumbnailContainerStyle}>
              <Text> Image </Text>
            </View>

            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{name}</Text>
              <Text>Rank : {rank}</Text>  
            </View>
          </CardSection>



        </Card>
    );

};

const styles={
  headerContentStyle: {
    flexDirection:'column',
    justifyContent:'space-around'
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