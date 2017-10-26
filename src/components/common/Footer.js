import React from 'react';
import { Text,View } from 'react-native';

import {Picker} from './index.js';

const Footer  = (props)=> {
    return (
      <View style={styles.viewStyle}>
          {props.children}
      </View>
    );
  };


const styles = {
  viewStyle:{
    backgroundColor:'#F8F8F8',
    justifyContent:'flex-end',
    alignItems:'center',
    height:40,
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0,
    flexDirection:'row',
  },
    textStyle: {
      fontSize: 20,
    },
};


export {Footer};