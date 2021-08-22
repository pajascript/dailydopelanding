import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import About from "../components/AboutSection";
import Products from "../components/ProductsSection";
import Footer from "../components/Footer";

const Home = () => {
    //States & Functions
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggleMenu={toggleMenu} />
            {/* <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
            <HeroSection />
            <About />
            <Products />
            <Footer /> */}
        </>
    )
}

export default Home;