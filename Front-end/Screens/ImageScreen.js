import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Button, TouchableHighlight} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ImageScreen extends Component {
  
  static navigationOptions = {
    header: null
  }

  onLike=()=>{
  }

  render() {
    const { navigation } = this.props;
    const all = navigation.getParam('all', ' ');
    const { params} = this.props.navigation.state;
    // console.log(all.urls);
    let imgSource = all.urls.regular;

    return (
      <View style={styles.fullScreenImage}>
          <ImageZoom cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width}
            imageHeight={Dimensions.get('window').height}
            minScale={1.1}
            >
            <Image source={{uri: imgSource}} style ={{height:Dimensions.get('window').height}} resizeMode="cover"/>
        </ImageZoom>
        <View style={styles.iconContainer}>
        <TouchableHighlight onPress={this.onLike} style={styles.iconButton} underlayColor={'transparent'}>
          <Icon name="info" size={20} color="#fff"/>         
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onLike} style={styles.iconButton} underlayColor={'transparent'}> 
          <Icon name="wrench" size={20} color="#fff" />         
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{params.like(all)}} style={styles.iconButton} underlayColor={'transparent'}>
          <Icon name="heart" size={20} color="#fff"/>         
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({

  fullScreenImage:{
    height: Dimensions.get('window').height,
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    position : 'absolute', 
    top:Dimensions.get('window').height*8/9,
    backgroundColor: "#00000018",
    height:Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  iconButton:{
    flex:1,
    alignItems:'center',
    top: 25,
  }
})
