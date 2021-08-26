import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Todo = ({title}) => {
    return (
        <View>
            <Text> {title} </Text>
            <ScrollView>
        {todos.map(todo => (
          <Todo 
          title={todo}
          />
        ))}
      </ScrollView>
      <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText={text => setInput(text)}
      />
      <Button
        title='Add TODO'
        onPress={addTodo}
      />
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
})
