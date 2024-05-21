import React from 'react';
import { LogBox } from "react-native";
import MainTabBar from './navigation/main_tab_bar';
import CreateMove from './components/create_move';
// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
  return <MainTabBar />;
};


export default App;