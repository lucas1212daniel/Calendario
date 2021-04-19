import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Alimentacao = (props) => 
  <View>
    <Text style={styles.text}>Exercícios</Text>
    <Text style={styles.paragrafo}>Exercícios físicos são importantes, mas se forem feitos de forma extrema, acabam prejudicando o organismo. Muitas atletas de ponta, com baixíssima porcentagem de gordura no corpo, por exemplo, acabam deixando de menstruar. Isso não é legal para o organismo. De novo, o equilíbrio é a      chave para a boa saúde.</Text>
    <Text style={styles.paragrafo}>A prática regular de atividades físicas é fundamental também para quem tem TPM. Para aquelas que enfrentam sintomas ligados ao emocional, os exercícios vão ajudar no equilíbrio da saúde mental. Atividades como a ioga, pro exemplo, têm função relaxante, além de ajudar a diminuir a tensão muscular e mesmo o mau humor!</Text>
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
export default Alimentacao;