import React from "react";
import "./components/all.sass";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Body from "./components/body";
import Footer from "./components/footer";
import "./components/all.sass";

function App() {
  return (
    <>
      <NavBar />
      <Hero></Hero>
      <Body></Body>
      <Footer></Footer>
    </>
  );
}

export default App;
