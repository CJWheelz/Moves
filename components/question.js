import React, { useState } from 'react';
import { navigation, StyleSheet, View, Text, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

// Add incoming question data??
const Question = ( {navigation} ) => {

  const prompt = 'Is this Romantic?';

  const handleYes = () => {
    alert("YESSS")
  }

  const handleNo = () => {
    alert("NOOOO")
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}> {prompt} </Text>
        <TouchableOpacity onPress={handleYes} style={styles.button}> 
            <Text style={styles.button.text}>
              YES
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    width: 50,
    borderRadius: 20,
    padding: 10,
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
  }
});

export default Question;
