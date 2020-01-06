import React from 'react';
import Header from "./components/structure/Header"
import Content from "./components/structure/Content"
import Footer from "./components/structure/Footer"

import './App.css';
import 'bulma/css/bulma.css'

function App() {
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setisLoading(false), 1000);
  });

  return (
    <div>
      {isLoading 
      ?
      <progress class="progress is-small is-dark" max="100">15%</progress>
      : 
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      }
    </div>
  );
}

export default App;
