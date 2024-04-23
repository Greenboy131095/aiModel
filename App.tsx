/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screens/Home/index';
import Post from './src/components/Post/index'
import { StatusBar, } from 'react-native';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults/index';
import DestinationSearchScreen from './src/screens/DestinationSearch/index';
import GuestsScreen from './src/screens/Guests/index';  
import Router from './src/navigation/Router';
const post1=feed[0];
import {
  SafeAreaView
} from 'react-native';
function App(): React.JSX.Element {
  return (
    <>
     <StatusBar barStyle="dark-content" />
     <SafeAreaView >
      <HomeScreen  style={{position:'relative'}}/>
      {/* <Post post={post1}/> */}
      {/* <SearchResultsScreen/> */}
      {/* <DestinationSearchScreen/> */}
      {/* <GuestsScreen/> */}
    </SafeAreaView>
    </>
   
  );
}

export default App;
