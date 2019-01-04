import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';

import TodoList from './TodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <TodoList />
    </View>
  </Provider>
);

export default App;
