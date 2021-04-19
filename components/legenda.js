import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Legenda = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.margin}>

      <Text style={styles.title}>Dia {props.dia}{props.info1}</Text>
      <Text style={styles.paragrafo}>{props.info}</Text>
      <Text>{props.info2}</Text>
      <Text>{props.info3}</Text>
      <Text>{props.info4}</Text>
      </View>
      </View>)
  }

const styles = StyleSheet.create({
  
  container: {
    
    
    marginTop: '30px',
    flex: 1,
    backgroundColor: '#e0a957',
    maxWidth: '250px',
    minHeight: '300px',
    borderRadius: '5%;',

  },
  title: {
    
    justifyContent: 'center', 
   fontSize: 20,

  },

  paragrafo: {
    fontSize: 17,
    marginTop: '10px',
    marginBottom: '5px',
  },

  margin: {
    margin: '10px',
  },


  text: {
   
    fontSize: 20,

  },
 
  line: {
    flexDirection: 'row',
    
  },

  size: {
    width: '42px',
    justifyContent: 'center',
    
  },
  
  button: {
    flex: 1,
    margin: 3,
  },
});

export default Legenda;