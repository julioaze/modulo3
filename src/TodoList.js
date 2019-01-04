import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const TodoList = ({ todos }) => {
  console.tron.log(todos);
  return (
    <View>
      {todos.map(todo => (
        <Text style={styles.welcome}>{todo}</Text>
      ))}
    </View>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
