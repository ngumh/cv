import React from 'react';
import Header from "./components/structure/Header"
import Content from "./components/structure/Content"
import Footer from "./components/structure/Footer"
import { css } from "@emotion/core";
import { CircleLoader } from "react-spinners";
import './App.css';
import 'bulma/css/bulma.css'

function App() {
  const [isLoading, setisLoading] = React.useState(true);
  const override = css`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  React.useEffect(() => {
    setTimeout(() => setisLoading(false), 2500);
  });

  return (
    <div >
      {isLoading ? 
          <CircleLoader    
          css={override}
          size={"100px"}
          color={"#e4d00a"}
          loading={setisLoading}
        />
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
