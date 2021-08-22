import React from "react";
import { MdClose } from "react-icons/md";
import {SidebarContainer,
        SidebarWrapper,
        CloseIcon,
        SidebarItems,
        SidebarLink,
        SidebarBtn
        } from "./SidebarElements";

const Sidebar = ({isOpen, toggleMenu}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggleMenu}>
                <SidebarWrapper>
                    <CloseIcon onClick={toggleMenu}>
                        <MdClose />
                    </CloseIcon>
                    <SidebarItems>
                        <SidebarLink onClick={toggleMenu} to="home" smooth={true} duration={600} >Home</SidebarLink>
                        <SidebarLink onClick={toggleMenu} to="about" smooth={true} duration={600} >About</SidebarLink>
                        <SidebarLink onClick={toggleMenu} to="products" smooth={true} duration={600} >Products</SidebarLink>
                    </SidebarItems>
                    <SidebarBtn>Sign In</SidebarBtn>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;