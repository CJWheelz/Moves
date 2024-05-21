import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

const CreateMove = () => {
    const handleCreateMove = () => {
        console.log('Create Move');
    }
    const handleJoinMove = () => {
        console.log('Join Move');
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}> Test </Text>
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

export default CreateMove;
