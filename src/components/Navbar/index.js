import React, { useState, useEffect } from "react";
import  { Nav,
          NavContainer,
          NavWrapper,
          NavLogo,
          MobileMenu,
          NavMenu,
          NavItems,
          NavLink,
          NavBtn
        } from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({toggleMenu}) => {
    //States
    const [navbar, setNavbar] = useState(false);
    const [navbarRevealed, setNavbarRevealed] = useState(true);

    //Functions
    let lastScroll = 0;
    const changeNavbar = () => {
        //Navbar change background
        if(window.scrollY >= 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }

        //Navbar Reveal on scroll
        const currentScroll = window.pageYOffset;
        if (currentScroll < lastScroll) {
            setNavbarRevealed(true)
            console.log("up");
        }
        if (currentScroll > lastScroll) {
            setNavbarRevealed(false);
        }
        lastScroll = currentScroll;
    }

    //Event Listener
    useEffect(() => {
        window.addEventListener("scroll", changeNavbar);
    }, []);

    return (
        <Nav className={navbarRevealed ? "scroll-up" : "scroll-down"} >
            <NavContainer className={navbar ? "active" : ""} >
                <NavWrapper>
                    <NavLogo to='home' >Daily Dope</NavLogo>
                    <MobileMenu onClick={toggleMenu}><FaBars /></MobileMenu>
                    <NavMenu>
                        <NavItems>
                            <NavLink to="home" smooth={true} duration={600} >Home</NavLink>
                            <NavLink to="about" smooth={true} duration={600} >About</NavLink>
                            <NavLink to="products" smooth={true} duration={600} >Products</NavLink>
                        </NavItems>
                        <NavBtn>Sign In</NavBtn>
                    </NavMenu>
                </NavWrapper>
            </NavContainer>
        </Nav>
    )
}

export default Navbar;