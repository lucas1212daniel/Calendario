import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Fases = (props) => {
  return(
  <View>
<Text style={styles.text}>Fases do Ciclo Menstrual</Text>
      <Text style={styles.paragrafo}>O ciclo menstrual inicia-se a partir do primeiro dia da menstruação e é controlado pela ação dos hormônios produzidos pelos ovários, como veremos a seguir. No entanto, para ficar mais claro, apresentaremos as fases do ciclo menstrual a partir da fase proliferativa, encerrando com a fase menstrual, quando ocorre a menstruação.</Text>
      <Text style={styles.paragrafo}>Fase folicular: a ação do hormônio estradiol, produzido pelo folículo em crescimento no ovário, estimula o espessamento da parede uterina (endométrio).</Text>
       

      <Text style={styles.paragrafo}>Fase lutua: assim que o folículo se rompe, liberando o ovócito, origina-se o corpo-lúteo, que secreta estradiol e a progesterona, estimulando a manutenção e o desenvolvimento da parede uterina, onde ocorrerá, por exemplo, o crescimento das glândulas do endométrio, responsáveis por secretar um líquido que nutrirá o embrião antes de ele se implantar na parede uterina.</Text>

      <Text style={styles.paragrafo}>Fase menstrual: se nenhuma embrião tiver sido implantado na parede uterina até o final da fase anterior, o corpo-lúteo irá se desintegrar, o que ocasionará uma queda na concentração dos hormônios ovarianos. A queda desses hormônios causa a constrição das artérias da parede uterina, o que desencadeia a desintegração de parte dessa parede, que é eliminada na menstruação.</Text>
      
  </View>
  )
}
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
export default Fases;