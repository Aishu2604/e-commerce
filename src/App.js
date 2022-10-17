import React from "react";
import { Route } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import ContextState from "./CONTEXT/ContextState";
import AboutHeader from "./About Page/AboutHeader";
import AboutMain from "./About Page/AboutMain";
import AboutFooter from "./About Page/AboutFooter";
function App() {
  return (
    <div>
      <div>
        <Route path="">
          <ContextState>
            <Header />
            <Main />
            <Footer />
          </ContextState>
        </Route>
      </div>
      <div>
        <Route path="/About">
          <AboutHeader />
          <AboutMain />
          <AboutFooter />
        </Route>
      </div>
    </div>
  );
}

export default App;
