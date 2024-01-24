import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
// import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import "./Style.css"

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="main" element ={<Main />} />
                <Route path="about" element ={<AboutMe />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </Router>


    );
}

export default App;