import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background: transparent;
    z-index: 999;
    position: fixed;
    top: 0;
    transition: all 400ms ease-in-out;

    &.scroll-down {
        transform: translateY(-70px);
    }

    &.scroll-up {
        transform: translateY(0);
    }
`;

export const NavContainer = styled.div`
    transition: all 400ms ease-in-out;
    width: 100%;
    height: 100%;
    
    &.active {
        background: #0f0f0f;
    }
`;

export const NavWrapper = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;

export const NavLogo = styled(ScrollLink)`
    background-image: linear-gradient(to right, #f195ac, #00a8ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    cursor: pointer;
    font-size: 2.2rem;
    font-weight: 900;
    text-transform: uppercase;
    font-family: 'Teko', sans-serif;
`;

export const MobileMenu = styled.div`
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    display: none;

    @media screen and (max-width: 820px) {
        display: flex;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    @media screen and (max-width: 820px) {
        display: none;
    }
`;

export const NavItems = styled.div`
    display: flex;

`;

export const NavLink = styled(ScrollLink)`
    color: #fff;
    cursor: pointer;
    padding: 0 2.5rem;
    transition: all 0.3s ease;

    &:hover {
        color: #ccc;
    }
`;

export const NavBtn = styled.a`
    color: #000;
    padding: 0.5rem 2rem;
    transition: all 0.3s ease-in-out;
    background: #00a8ff;
    border-radius: 10px;
    text-decoration: none;

    &:hover {
        background: #6dceff;
    }
`;