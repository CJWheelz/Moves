import React, { useState } from 'react';
import { TextInput, navigation, StyleSheet, View, Text, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { Label } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import useStore from '../store';

const ShareMove = ( {navigation} ) => {

  const [code, setCode] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Join a Move </Text>
        <View>
          <Label text="test" />
        </View>
        <TouchableOpacity style={styles.button}> 
            <Text style={styles.button.text}>
              Join Move
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    borderColor: 'black',
    justifySelf: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 20,
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
  },
  container: {
    flex: 1,
    direction: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 20,
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },

  button: {
    borderWidth: 3,
    borderColor: 'black',
    justifySelf: 'center',
    alignSelf: 'center',
    width: 200,
    borderRadius: 20,
    padding: 10,
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
  }
});

export default ShareMove;
