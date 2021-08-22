import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

export const SidebarContainer = styled.nav`
    display: none;
    height: 100%;

    @media screen and (max-width: 820px) {
        display: flex;
        position: fixed;
        top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
        right: 0;
        left: 0;
        background: #0d0d0d;
        transition: all 0.2s ease-in-out;
        opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
        pointer-events: ${({isOpen}) => (isOpen ? "all" : "none")};
        z-index: 999;
    }
`;

export const SidebarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const CloseIcon = styled.div`
    color: #fff;
    font-size: 2.8rem;
    font-weight: bolder;
    position: fixed;
    top: 15px;
    right: 10px;
    cursor: pointer;
`;

export const SidebarItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 80px;
`;

export const SidebarLink = styled(ScrollLink)`
    text-decoration: none;
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    padding: 0.8rem;

    &:hover {
        color: #f195ac;
    }
`;

export const SidebarBtn = styled.a`
    text-decoration: none;
    color: #000;
    background: #00a8ff;
    cursor: pointer;
    padding: 0.5rem 2rem;
    transition: all 0.3s ease;
    border-radius: 50px;
    margin: 40px 0;
    font-size: 1.3rem;

    &:hover {
        background: #f195ac;
    }
`;