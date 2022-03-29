import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux';
import RootStackScreen from './src/routers';

const App = () => {
  return (
    <Provider store = {store}>
      <RootStackScreen />
    </Provider>
  );
};


export default App;
