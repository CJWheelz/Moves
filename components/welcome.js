import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';

const Welcome = () => {
    const handleCreateMove = () => {
        console.log('Create Move');
    }
    const handleJoinMove = () => {
        console.log('Join Move');
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}> Moves </Text>
        <TouchableOpacity onPress={handleCreateMove} style={styles.button}> 
            <Text style={styles.button.text}>
            Create Move
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleJoinMove} style={styles.button}> 
            <Text style={styles.button.text}>
                Join Move
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
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

export default Welcome;
