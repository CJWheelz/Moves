import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WaitingRoom = ({ users, author }) => {
  const currentUser = 'Your current user name'; // Replace this with the actual current user's name

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Waiting for players to join. 5 users have joined.</Text>
      {currentUser === author && <Button title="Start Room" onPress={() => console.log('Room started')} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WaitingRoom;