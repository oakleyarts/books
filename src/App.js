import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';

// Redux stuff
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="App"></div>
  </Provider>
);

export default App;
