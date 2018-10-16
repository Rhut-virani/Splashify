import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';
import Collections from './Collections';
import All from './All';
import Likes from './Likes';
import Unsplash, {toJson} from 'unsplash-js/native';

const unsplash = new Unsplash({
  applicationId: "84d009e3bcbed9ee2c3befa05f05264a0ba732fecfcf18b4037dd0a68d469f7d",
  secret: "3d52265007190eedab328d1c3a74cf1c1fa2aecc7de8332a6a7bc4c84844d74f",
  callbackUrl: "{CALLBACK_URL}"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "read_photos",
]);


export default class Homescreen extends React.Component {
  state = {
    index: 0,
    all: {},
    likes:{},
    routes: [
      { key: 'first', title: 'Collections' },
      { key: 'second', title: 'All' },
      { key: 'third', title: 'Likes' },
    ],
  };

  static navigationOptions = {
    header: null
  }
  componentDidMount(){
     unsplash.photos.listCuratedPhotos(5, 100, "latest")
                    .then(toJson)
                    .then(json => {
                      console.log(json);
                      this.setState({
                        all: json
                      })
                    });
  }

  onLike=(all)=>{
    console.log("something happened");
    console.log(all);
  }

  render() {
    
    const FirstRoute = (props) => (
      <View style={ { backgroundColor: '#380C0C', height: 1000 }}>
        <Collections index={this.state.index} all={this.state.all} like={()=>{this.onLike()}}/>
      </View>
    ); 
    const SecondRoute = () => (
      <View style={{ backgroundColor: '#334e4e', height: 1000 }}>
        <All all={this.state.all}/>
      </View>
    );
    const ThirdRoute = () => (
      <View style={{ backgroundColor: '#380C0C', height: 1000 }} >
      <Likes likes={this.state.likes}/>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.appbar}>
          <Text style={styles.appbartext}>Splashify</Text>
        </View>
        <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
              third: ThirdRoute,

            })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{   height: 0,
                            width: Dimensions.get('window').width}}
          renderTabBar={props =>
            <TabBar
              style= {styles.TabBar}
              {...props}
              indicatorStyle={{ backgroundColor: '#CC2A2A', }}
              pressColor ={'#6FFFE9'}
              />
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#171717",
    height: Constants.statusBarHeight,
  },
  TabBar: {
    backgroundColor: '#171717'
  },
  appbar:{
    backgroundColor: '#171717',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appbartext:{
    flex: 1,
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: '700',
    color: "#f2f2f2",
  },
  container: {
    backgroundColor: '#f3f3f3',
    height: 1000,
  },
});
