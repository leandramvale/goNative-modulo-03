/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import TodoList from './TodoList';


const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
