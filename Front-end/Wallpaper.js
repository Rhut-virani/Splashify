import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';


const FirstRoute = () => (
  <View style={ { backgroundColor: '#ff4081', height: 500 }}>
  <Text>hi</Text>
  </View>
);
const SecondRoute = () => (
  <View style={{ backgroundColor: '#673ab7', height: 500 }} />
);
const ThirdRoute = () => (
  <View style={{ backgroundColor: '#673ab7', height: 500 }} />
);
export default class Wallpaper extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Collections' },
      { key: 'second', title: 'All' },
      { key: 'third', title: 'Favorites' },

    ],
  };

  render() {
    return (
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
      />
    );
  }
}