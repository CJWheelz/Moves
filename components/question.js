import React, { act, useEffect, useState } from 'react';
import { navigation, StyleSheet, View, Text, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import useStore from '../store';

// Add incoming question data??
const Question = ( {route} ) => {

  // const prompt = 'Is this Romantic?';
  const getQuestion = useStore((state) => state.joinMoveSlice.getQuestion);
  const currentQuestionIndex = route.params.current;
  // const prompt = route.params.prompts[currentQuestionIndex];
  const [prompt, setPrompt] = useState('');
  // console.log(actualPrompt);
  const submitResponse = useStore((state) => state.joinMoveSlice.submitResponse);

  useEffect(() => {
    const fetchQuestion = async () => {
      const question = await getQuestion(); // Assuming getQuestion is async
      setPrompt(question);
    };
    fetchQuestion();
  }, []);

  const handleYes = async () => {
    await submitResponse(true);
    alert("YESSS")
    const newIndex = currentQuestionIndex + 1;
    
  }

  const handleNo = async () => {
    await submitResponse(false);
    alert("NOOOO")
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}> {prompt} </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleNo} style={[styles.button, styles.red]}> 
              <Text style={styles.button.text}>
                NO
              </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleYes} style={[styles.button, styles.green]}> 
              <Text style={styles.button.text}>
                YES
              </Text>
          </TouchableOpacity>
        </View>

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%', // Adjust this width as needed
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
    width: 100,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10, // Add space between buttons
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
  },
  green: {
    borderColor: 'green',
  },
  red: {
    borderColor: 'red',
  }
});

export default Question;
