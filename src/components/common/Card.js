import React from 'react';
import { View } from 'react-native';


const Card  = (props)=> {
  return (
        <View style={styles.containerStyle}>
          {props.children}
        </View>
    );

};

const styles ={
	containerStyle:{
		borderWidth:1,
		borderRadius:4,
		borderColor:'#ddd',
		borderBottomWidth:0,

		justifyContent:'space-between',


		shadowColor:'#000',
		shadowOffset: {width:0,height:0},
		shadowOpacity:0.2,
		shadowRadius:4,
		elevation:3,

		marginLeft:5,
		marginRight:5,
		marginTop:10,

	},
};



export {Card}; 