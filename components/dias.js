import React, { Component } from 'react';
import {View, StyleSheet, Button, Text } from 'react-native';

class Dias extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

onPress(val) {
		this.props.onPress(val);
	}

  render() {
    return (
      
      <View  style={styles.container}>
      <Button style = {styles.border}
        onPress={ () => { this.onPress(this.props.press) } }
        title= {this.props.title}
        color={this.props.color}
        

        />
        
    </View>
    
  

    
    );
    
}


}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#000',
    width: '42px',
    height: '42px',
    borderColor: '#FFF',
  },

    border: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.808)',

  },

  button: {
    flex: 1,
     borderColor: '#FFF',
     
    width: '42px',
    height: '42px',
    color: '#000'
  },
});

export default Dias;