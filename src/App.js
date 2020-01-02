import React from 'react';
import Header from "./components/structure/Header"
import Content from "./components/structure/Content"
import Footer from "./components/structure/Footer"

import './App.css';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
