import React from "react";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import ContextState from "./CONTEXT/ContextState";
function App() {
  return (
    <div>
      <ContextState>
      <Header />
      <Main />
      <Footer />
      </ContextState>
    </div>
  );
}

export default App;
