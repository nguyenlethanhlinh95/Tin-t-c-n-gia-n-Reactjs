import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './Components/Layout/Header/Header';
import Menu from './Components/Layout/Menu/Menu';
import Footer from './Components/Layout/Footer/Footer';

import DieuHuong from './Components/Router/DieuHuong';


function App() {
  return (
      <Router>
        <div>
          <Header />
          <Menu>           
          </Menu>
          <DieuHuong />
          <Footer />
        </div>
      </Router>
  );
}

export default App;
