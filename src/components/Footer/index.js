import React from "react";
import {FooterContainer,
        FooterWrapper,
        SocMeds,
        Logo,
        FooterInfo,
        InfoLi,
        TermsOfUse,
        FooterCopyright
        } from "./FooterElements";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import shopee from "../../images/shopee.svg";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <SocMeds>
                    <FaFacebookSquare />
                    <FaInstagram />
                    <Logo src={shopee} alt="Shopee Logo" />
                </SocMeds>
                <FooterInfo>
                    <InfoLi>Info</InfoLi>
                    <InfoLi>Support</InfoLi>
                    <InfoLi>Marketing</InfoLi>
                </FooterInfo>
                <TermsOfUse>
                    <InfoLi>Terms of Use</InfoLi>
                    <InfoLi>Privacy Policy</InfoLi>
                </TermsOfUse>
                <FooterCopyright>© 2020 Daily Dope</FooterCopyright>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;