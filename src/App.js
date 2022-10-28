import React from "react";
import { Route } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import AboutHeader from "./About Page/AboutHeader";
import AboutMain from "./About Page/AboutMain";
import AboutFooter from "./About Page/AboutFooter";
import HomeMain from "./Home Page/HomeMain";
import HomeHeader from "./Home Page/HomeHeader";
import HomeFooter from "./Home Page/HomeFooter";
import ContactFooter from "./Contact Us/ContactFooter";
import ContactHeader from "./Contact Us/ContactHeader";
import ContactMain from "./Contact Us/ContactMain";
import ProductDetail from "./Product Detail/ProductDetail";
import Login from "./LOGIN/Login";
import AuthContext from "./LOGIN CONTEXT/auth-context";
import { useContext } from "react";
function App() {
  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.isLoggedIn;

  async function addQuerryHandler(querry) {
    const response = await fetch(
      "https://react-http-69239-default-rtdb.firebaseio.com/querry.json",
      {
        method: "POST",
        body: JSON.stringify(querry),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <div>
      {isLoggedIn && (
        <Route path="/" exact>
          <Header />
          <Main />
          <Footer />
        </Route>
      )}

      <Route path="/ /:id">
        <ProductDetail />
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
      <Route path="/Contact Us">
        <ContactHeader />
        <ContactMain onAddQuerry={addQuerryHandler} />
        <ContactFooter />
      </Route>
      {!isLoggedIn && (
        <Route path="/Login">
          <Login />
        </Route>
      )}
    </div>
  );
}

export default App;
