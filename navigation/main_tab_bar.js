import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import About from '../components/about';
import SearchTab from './search_tab';
import CreateMove from '../components/create_move';
import JoinMove from '../components/join_move';
import Welcome from '../components/welcome';
import WaitingRoom from '../components/waiting_room';
import Question from '../components/question'
import ShareMove from '../components/share_move';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabBar = () => {
 
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="CreateMove" component={CreateMove}/>
          <Stack.Screen name="ShareMove" component={ShareMove} />
          <Stack.Screen name="JoinMove" component={JoinMove} />
          <Stack.Screen name="Question" component={Question} />
          <Stack.Screen name="WaitingRoom" component={WaitingRoom} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
export default MainTabBar;
