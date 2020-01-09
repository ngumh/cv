import React, { Suspense, lazy } from 'react';
import { css } from "@emotion/core";
import { CircleLoader } from "react-spinners";
import './App.css';
import 'bulma/css/bulma.css'
const Header = lazy(() => import("./components/structure/Header"))
const Content = lazy(() => import("./components/structure/Content"))
const Footer = lazy(() => import("./components/structure/Footer"))

function App() {
  const override = css`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <Suspense fallback={
      <div>
        <CircleLoader
          css={override}
          size={"100px"}
          color={"#e4d00a"}
        />
      </div>

    }>
      <Header />
      <Content />
      <Footer />
    </Suspense>
  );
}

export default App;
