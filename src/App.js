import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
// Routes can listen the navigation on this history
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
