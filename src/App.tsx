import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Main from './Layouts/Navbar';
import Landing from './components/Landing/Landing';

const App = () => {
  return (
    <div className="App">
      <Main>
        <Landing />
      </Main>
    </div>
  );
};

export default App;
