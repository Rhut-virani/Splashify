import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';
import Collections from './Screens/Collections';
import All from './Screens/All';
import Likes from './Screens/Likes';




export default class Homescreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Collections' },
      { key: 'second', title: 'All' },
      { key: 'third', title: 'Likes' },
    ],
  };

  render() {
    
    const FirstRoute = (props) => (
      <View style={ { backgroundColor: '#380C0C', height: 1000 }}>
        <Collections index={this.state.index}/>
      </View>
    ); 
    const SecondRoute = () => (
      <View style={{ backgroundColor: '#334e4e', height: 1000 }}>
        <All />
      </View>
    );
    const ThirdRoute = () => (
      <View style={{ backgroundColor: '#380C0C', height: 1000 }} >
      <Likes />
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
                           width: Dimensions.get('window').width }}
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
    height: 75,
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
