import React from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Experience from "./components/experience/experience";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Service from "./components/service/Service";

function App(){

    return (
        <>
        <Header />
        <Nav />
        < About />
        <Experience />
        <Service />
        <Contact /> 
        </>
    )
}

export default App;