import React, { useState } from 'react';
import { TextInput, navigation, StyleSheet, View, Text, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import useStore from '../store';

const JoinMove = ( {navigation} ) => {

  const [code, setCode] = useState('');

  const handleCodeEnter = (event) => {
    setCode(event.nativeEvent.text);
  } 
  const user = useStore((state) => state.joinMoveSlice.user);
  const joinMove = useStore((state) => state.joinMoveSlice.joinMove);

  const handleTestCode = async () => {
    if (!code) {
      alert('Please enter a code');
      return;
    }

    try {
      console.log(code);
      console.log(user);
      const response = await joinMove(code, user);
      console.log(response);
    
      if (response) {
        useStore((state) => state.joinMoveSlice.setMoveId(response.data.moveId));
        navigation.navigate('Question');
      }
    } catch (error) {
      alert('Join Move Failed: ' + error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Join a Move </Text>
        <View>
          <Input placeholder='Enter Code' onChange={handleCodeEnter} inputContainerStyle={styles.input} />
        </View>
        <TouchableOpacity onPress={handleTestCode} style={styles.button}> 
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

export default JoinMove;
