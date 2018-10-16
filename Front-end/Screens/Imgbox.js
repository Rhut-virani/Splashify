
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class Imgbox extends React.Component {


  render() {
      let i = this.props.i;
      let all = this.props.all;
      let imgSource = "https://images.unsplash.com/photo-1539576282236-40272d2dbe7e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9cee2739772eb498885974c2f2542a83&auto=format&fit=crop&w=1950&q=80";

      if(all[i]){
        imgSource= all[i].urls.thumb;
      }
    return (
              <View style={styles.imageBox}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ImageScreen' , {all : all[i] , like:this.props.like})}}> 
                  <Image source={{uri: imgSource}} style ={{height:200, width:Dimensions.get('window').width / 2 - 12}} resizeMode="cover"/>
                </TouchableOpacity>
              </View>
    );
  }
}
const styles = StyleSheet.create({
  imageBox:{
    width: Dimensions.get('window').width / 2 - 12,
    height: 200,
    margin: 4,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default withNavigation(Imgbox);