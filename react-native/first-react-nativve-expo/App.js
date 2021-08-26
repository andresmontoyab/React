import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Todo from './Todo';
import Total from './Total';

export default function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos([input, ...todos])
    setInput('')
  }
  return (
    <SafeAreaView>
      <View >
        <Text style={styles.tittleText}> Hey Guys</Text>
      </View>
      <Total/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
  },
  tittleText: {
    backgroundColor: 'red',
    fontSize: 26
  },
  todoInput: {
    margin: 20,
    borderRadius: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  }
})

