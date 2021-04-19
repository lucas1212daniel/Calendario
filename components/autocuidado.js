import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Autocuidado = (props) => 
  <View>
    <Text style={styles.text}>Autocuidado</Text>
    <Text style={styles.paragrafo}>Para aliviar a cólica menstrual, tente usar bolsas de água quente e tomar um chá quentinho. Caso não adiante e os remédios que você costuma usar com prescrição médica também não façam mais efeito, procure um(a) médico(a). Cólicas muito fortes, principalmente nos dois dias anteriores à menstruação, podem sinalizar alguns problemas de saúde.</Text>
    <Text style={styles.paragrafo}>Tentar dormir melhor. Adormecer em horário regular e ter oito horas de sono por noite pode fazer a diferença na menstruação e na qualidade de vida. </Text>
  </View>
  const styles = StyleSheet.create({
  
 
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    padding: 2
  },

    paragrafo: {
    color: 'black',
    textAlign: 'start',
    fontSize: 16,
   
    padding: 2
  }
});
export default Autocuidado;