
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image} from 'react-native';

export default class Imgbox extends Component {

  render() {
      let i = this.props.i;
      // const imgSource = '../assets/Wallpapers/' + i + '.jpg';
      let imgSource1 = "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm"
      let imgSource2 = "=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
      let imgSource = imgSource1 + imgSource2

      

      console.log(imgSource);

    return (
              <View style={styles.imageBox}>
                
                <Image source={{uri: imgSource}} style ={{height:200, width:Dimensions.get('window').width / 2 - 16}} resizeMode="cover"/>
              </View>
    );
  }
}
const styles = StyleSheet.create({
  imageBox:{
    width: Dimensions.get('window').width / 2 - 16,
    height: 200,
    margin: 4,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
  }
});