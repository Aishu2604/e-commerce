import React from "react";
import { Route } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import ContextState from "./CONTEXT/ContextState";
import AboutHeader from "./About Page/AboutHeader";
import AboutMain from "./About Page/AboutMain";
import AboutFooter from "./About Page/AboutFooter";
import HomeMain from "./Home Page/HomeMain";
import HomeHeader from "./Home Page/HomeHeader";
import HomeFooter from "./Home Page/HomeFooter";
function App() {
  return (
    <div>
      <Route path="">
        <ContextState>
          <Header />
          <Main />
          <Footer />
        </ContextState>
      </Route>

      <Route path="/About">
        <AboutHeader />
        <AboutMain />
        <AboutFooter />
      </Route>
      <Route path="/Home">
        <HomeHeader />
        <HomeMain />
        <HomeFooter />
      </Route>
    </div>
  );
}

export default App;
