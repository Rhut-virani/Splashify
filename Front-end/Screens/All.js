
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image} from 'react-native';
import Imgbox from './Imgbox';
export default class All extends Component {

  render() {
    let imgJSX = [];

    for(i=1; i<15; i++){
        imgJSX.push( <Imgbox key={i} i={i} navigation={this.props.navigation}/>);
    };
    // console.log(imgJSX);
    return (
      <ScrollView style={{flex:1, height: Dimensions.get('window').height}}>
      <View style={styles.imageBoxContainer}>
        {imgJSX}
      </View>
    </ScrollView>
);
}
}

const styles = StyleSheet.create({
  imageBoxContainer:{
  padding: 2,
  flex: 1 ,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  },
});