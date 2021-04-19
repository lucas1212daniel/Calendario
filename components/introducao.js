import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Menopausa = (props) => 
  <View>
        <Text style={styles.text}>Introdução</Text>
      <Text style={styles.paragrafo}>O ciclo menstrual é o termo utilizado para designar as transformações cíclicas que ocorrem no útero, sendo também chamado de ciclo uterino. O ciclo menstrual tem duração de cerca de 28 dias, entretanto, podem ocorrer variações, como ciclos de 20 a 40 dias.</Text>
      <Text style={styles.paragrafo}>O ciclo menstrual é controlado pela ação de hormônios produzidos pela hipófise e pelos ovários. A ação desses hormônios interliga o ciclo menstrual, responsável por preparar o revestimento uterino para o estabelecimento de um embrião em uma possível gestação, e o ciclo ovariano, que envolve o crescimento do folículo ovariano e a ovulação.</Text>
     
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
export default Menopausa;