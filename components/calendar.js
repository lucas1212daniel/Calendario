import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Dias from './dias'
import Legenda from './legenda'
import Week from './week'



class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      labelText: null,
    };

  }

    onPress(id) {
    
    if (id == 1) {
      this.setState( {labelText:
 
      <Legenda dia={id} 
        info1=": Início do ciclo"
        info="Período infértil: Término da TMP"
        info2="Começa a primeira menstruação."
        info3="O hormônio folículo-estimulante, ou FSH, é secretado, estimulando a produção de folículos nos ovários que contêm óvulos. É mais provável que esta seja a época “feliz” do mês para a mulher."
        />} );
    } 
    
    else if (id >= 2 && id <= 5) {
      this.setState( {labelText: 
        <Legenda dia={id} 
        info1=": Fase Folicular"
        info="Período infértil"
        info2="O revestimento do útero se rompe, ocorre a menstruação"
        info3="O hormônio folículo-estimulante, ou FSH, é secretado, estimulando a produção de folículos nos ovários que contêm óvulos. É mais provável que esta seja a sua época “feliz” do mês."
        />} );
    } 
    else if (id >= 6 && id <= 10) {
      this.setState( {labelText: 
        <Legenda dia={id} 
        info1=": Fase Folicular"
        info="Período infértil"
        info2="O revestimento do útero engrossa novamente."
        info3="O hormônio folículo-estimulante, ou FSH, é secretado, estimulando a produção de folículos nos ovários que contêm óvulos. É mais provável que esta seja a sua época “feliz” do mês."
     />} );
    }
    else if (id >= 11 && id <= 13) {
      this.setState( {labelText: 
        <Legenda dia={id} 
        info1=": Período de Ovulação"
        info="Período fértil: Ocorre a ovulação"
        info2="A mulher está mais propicia a engravidar nesta data"
        info3="Esse hormônio induz a liberação de um óvulo dos ovários nas trompas de Falópio para fertilização. O estradiol está presente em quantidades significativas na época da ovulação e pode interagir com outros hormônios para aumentar a libido. Ou seja, neste período, a mulher estará mais propícia ao desejo sexual."
        />} );
    }
    else if (id == 14) {
      this.setState( {labelText: 
        <Legenda dia={id} 
        info1=": Centro da Ovulação"
        info="Período fértil: Ocorre a ovulação."
        info2="A mulher está mais propicia a engravidar nessa data."
        info3="Esse hormônio induz a liberação de um óvulo dos ovários nas trompas de Falópio para fertilização. O estradiol está presente em quantidades significativas na época da ovulação e pode interagir com outros hormônios para aumentar a libido. Ou seja, neste período, a mulher estará mais propícia ao desejo sexual."
        />} );
    } 

    else if (id >= 15 && id <= 17) {
      this.setState( {labelText: 
        <Legenda dia={id} 
        info1=": Período de Ovulação"
        info="Período fértil: Ocorre a ovulação"
        info2="A mulher está mais propicia a engravidar nessa data"
        info3="Esse hormônio induz a liberação de um óvulo dos ovários nas trompas de Falópio para fertilização. O estradiol está presente em quantidades significativas na época da ovulação e pode interagir com outros hormônios para aumentar a libido. Ou seja, neste período, a mulher estará mais propícia ao desejo sexual."
        />} );
    }

    else if (id >= 18 && id <= 21) {
      this.setState( {labelText: 
        <Legenda dia={id} 
        info1=": Fase lútea"
        info="Período infértil"
        info2="O revestimento do útero continua a engrossar."
        info3="Após a ovulação, o folículo vazio que antes continha o óvulo começa a secretar o hormônio progesterona para engrossar o revestimento do útero e prepará-lo para a possível implantação de um embrião. Conforme os níveis de progesterona aumentam, a mulher pode começar a se sentir mais mal-humorado. Isso acontece porque a progesterona ajuda o corpo a produzir cortisol, um hormônio que tende a ser mais alto em pessoas estressadas."
        />} );
    }

    else if (id >= 22 && id <= 27) {
      this.setState( {labelText: 
        <Legenda dia={id} 
        info1=": Fase lútea"
        info2="O revestimento do útero continua a engrossar"
        info= "Período infértil: Começa os sinais da TPM(Tensão Pré-Menstrual)."
        info3="Após a ovulação, o folículo vazio que antes continha o óvulo começa a secretar o hormônio progesterona para engrossar o revestimento do útero e prepará-lo para a possível implantação de um embrião. Conforme os níveis de progesterona aumentam, a mulher pode começar a se sentir mais mal-humorado. Isso acontece porque a progesterona ajuda o corpo a produzir cortisol, um hormônio que tende a ser mais alto em pessoas estressadas."
         />} );
    }
    else if (id == 28) {
      this.setState( {labelText: 
        <Legenda dia={id} 
        info1=": Fim do ciclo"
        info="Período infértil: A TPM fica mais forte nesse dia."
        info2="O revestimento do útero continua a engrossar."
        info3="Após a ovulação, o folículo vazio que antes continha o óvulo começa a secretar o hormônio progesterona para engrossar o revestimento do útero e prepará-lo para a possível implantação de um embrião. Conforme os níveis de progesterona aumentam, a mulher pode começar a se sentir mais mal-humorado. Isso acontece porque a progesterona ajuda o corpo a produzir cortisol, um hormônio que tende a ser mais alto em pessoas estressadas."
        />} );
      }
    else if (id >= 29) {
      <Dias color='red'/>

      this.setState( {labelText: 
        <Legenda dia={id} 
        info1=": Início do próximo ciclo"
        info="Período infértil"
        info2="O revestimento do útero se rompe, ocorre a menstruação"
        />} );
    } 
   
  }

   

  renderSquare(i, color) {
    return <View><Dias color={color} press={i} title={i} onPress={ (val) => this.onPress(val) }/>
    
    </View>;
  }
 
  render() {

    return (
      
        <View style = {styles.container}>
        <View >
    <View>
          <Text style={styles.text}>Calendário Periódico Feminino</Text>
        </View>
        <View style = {styles.week}>
          <View style = {styles.size, styles.red}><Week weekday="DOM"/></View>
          <View style = {styles.size}><Week weekday="SEG"/></View>
          <View style = {styles.size}><Week weekday="TER"/></View>
          <View style = {styles.size}><Week weekday="QUA"/></View>
          <View style = {styles.size}><Week weekday="QUI"/></View>
          <View style = {styles.size}><Week weekday="SEX"/></View>
          <View style = {styles.size,  styles.red}><Week weekday="SAB"/></View>
        </View>
        <View style = {styles.line}>
          <View style = {styles.border}>{this.renderSquare(1, 'rgb(255, 168, 219)')} </View>
          <View style = {styles.border}>{this.renderSquare(2, 'rgb(255, 168, 219)')} </View>
          <View style = {styles.border}>{this.renderSquare(3, 'rgb(255, 168, 219)')} </View>
          <View style = {styles.border}>{this.renderSquare(4, 'rgb(255, 168, 219)')} </View>
          <View style = {styles.border}>{this.renderSquare(5, 'rgb(255, 168, 219)')} </View>
          <View style = {styles.border}>{this.renderSquare(6, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(7, 'grey')} </View>
        </View>
        <View style = {styles.line}>
          <View style = {styles.border}>{this.renderSquare(8, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(9, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(10, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(11, 'rgb(216, 103, 103)')} </View>
          <View style = {styles.border}>{this.renderSquare(12, 'rgb(216, 103, 103)')}</View>
          <View style = {styles.border}>{this.renderSquare(13, 'rgb(216, 103, 103)')} </View>
          <View style = {styles.border}>{this.renderSquare(14, 'rgb(216, 103, 103)')} </View>
        </View>
        <View style = {styles.line}>
          <View style = {styles.border}>{this.renderSquare(15, 'rgb(216, 103, 103)')} </View>
          <View style = {styles.border}>{this.renderSquare(16, 'rgb(216, 103, 103)')} </View>
          <View style = {styles.border}>{this.renderSquare(17, 'rgb(216, 103, 103)')} </View>
          <View style = {styles.border}>{this.renderSquare(18, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(19, 'grey')}</View>
          <View style = {styles.border}>{this.renderSquare(20, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(21, 'grey')} </View>
        </View>
        <View style = {styles.line}>
          <View style = {styles.border}>{this.renderSquare(22, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(23, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(24, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(25, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(26, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(27, 'grey')} </View>
          <View style = {styles.border}>{this.renderSquare(28, 'rgb(53, 165, 180)')} </View>
        </View>
        <View style = {styles.line}>
          <View style = {styles.border}>{this.renderSquare(29, 'rgb(255, 168, 219)')} </View>
          <View style = {styles.border}>{this.renderSquare(30, 'rgb(255, 168, 219)')} </View>
          <View style = {styles.border}>{this.renderSquare(31, 'rgb(255, 168, 219)')} </View>
          
       
        
        </View>
        <View style={styles.margin}> <View style={styles.text}><Text style={styles.start}> Legenda </Text> </View> 
        <View style={styles.flex}>
              <View style ={styles.squaredpink} > M</View><View><Text>Período de menstruação</Text></View>
              </View>
               <View style={styles.flex}>
              <View style ={styles.squaredgray} > M</View><View><Text>Período "infértil" </Text></View>
              </View>
               <View style={styles.flex}>
              <View style ={styles.squaredred} > M</View><View><Text>Período Fértil</Text></View>
              </View>
              <View style={styles.flex}>
              <View style ={styles.squaredblue} > M</View><View><Text>Fim do ciclo</Text></View>
              </View>
           </View>
        </View>
        <View style={styles.center}>{this.state.labelText}</View>
        
        </View>
    )
    
  }
}

const styles = StyleSheet.create({
  start: {
    textAlign: 'start',
    fontSize: 16,

    fontWeight: '900px'
  },

  text: {
        color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 8
  },


 flex: {
   flexDirection: 'row', 
   margin: 4,
 },

  squaredpink: {
    backgroundColor: 'rgb(255, 168, 219)',
    width: '14px',
    heigth: 'auto',
    color: 'rgb(255, 168, 219)'

  },

    squaredgray: {
    backgroundColor: 'gray',
    width: '14px',
    heigth: 'auto',
    color: 'gray'

  },
    squaredred: {
    backgroundColor: 'rgb(216, 103, 103)',
    width: '14px',
    heigth: 'auto',
    color: 'rgb(216, 103, 103)'

  },
    squaredblue: {
    backgroundColor: 'rgb(53, 165, 180)',
    width: '14px',
    heigth: 'auto',
    color: 'rgb(53, 165, 180)'

  },

  margin: {
    
    margin: 3,
  },
  container: {
    flex: 1,

    margin: 'auto',
  },

  border: {
    margin: 0,

    padding: 0,
    borderWidth: 1,
    borderColor: '#fff',

  },

  center: {
    alignItems: 'center',
  },


  
  red: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red',
  },

  line: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    
     },

       week: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginBottom: '10px',
    
     },

  size: {
    flex: 1,
    alignItems: 'center',
    
  },
  
  
});

export default Calendar;