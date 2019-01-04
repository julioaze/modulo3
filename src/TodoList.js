import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from './store/actions/todos';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  todoContainer: {
    flexDirection: 'row',
  },
});

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <View>
    {todos.map(todo => (
      <View key={todo.id} style={styles.todoContainer}>
        <Text style={styles.welcome}>{todo.text}</Text>
        <TouchableOpacity
          onPress={() => {
            removeTodo(todo.id);
          }}
        >
          <Text style={styles.welcome}>Excluir</Text>
        </TouchableOpacity>
      </View>
    ))}
    <TouchableOpacity
      onPress={() => {
        addTodo('Conferir o código');
      }}
    >
      <Text style={styles.welcome}>Adicionar</Text>
    </TouchableOpacity>
  </View>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
