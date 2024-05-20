import React from 'react';
import { LogBox } from "react-native";
import MainTabBar from './navigation/main_tab_bar';
import Welcome from './components/welcome';

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
  return <Welcome />;
};


export default App;