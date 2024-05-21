import React from 'react';
import { LogBox } from "react-native";
import MainTabBar from './navigation/main_tab_bar';
import Welcome from './components/welcome';
import CreateMove from './components/create_move';
import WaitingRoom from './components/waiting_room';
// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
  return <WaitingRoom />;
};


export default App;