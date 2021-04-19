import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Fertil = (props) => 
  <View>
<Text style={styles.text}>Período fértil</Text>
     <Text style={styles.paragrafo}>Para calcular o período fértil, ou seja, o período mais propício para engravidar, é importante conhecer como ocorre o ciclo menstrual, cujo tempo de duração pode variar de mulher para mulher. Para isso, deve-se marcar em um calendário, durante pelo menos seis meses, o primeiro dia de cada menstruação (data que se inicia um novo ciclo), assim, é possível mensurar quantos dias durou cada ciclo.</Text>
      <Text style={styles.paragrafo}>Para se calcular o período fértil, deve-se diminuir 18 dias do ciclo com duração mais curta, obtendo-se, assim, o primeiro dia do período fértil, e 11 dias do ciclo mais longo, obtendo-se, assim, o último dia do período fértil. A seguir, apresentamos um exemplo que pode ajudar a compreender melhor esse cálculo.</Text>
      <Text style={styles.paragrafo}>É importante destacar que esse método pode ser um aliado para quem quer programar uma gravidez, mas é um método pouco eficaz para se prevenir a gravidez. Isso se deve ao fato de muitas mulheres apresentarem ciclos irregulares, o que poderia levar a uma mudança no período fértil.</Text>
    
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
export default Fertil;