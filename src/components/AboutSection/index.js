import React, { useEffect } from "react";
import {AboutContainer,
        AboutWrapper,
        TextWrapper,
        AboutH1,
        AboutP,
        ImgWrapper,
        } from "./AboutElements";
import aboutImg from "../../images/aboutImg.jpg";
import { Button } from "../ButtonElement";
import blob from "../../images/blob.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    //Animate on Scroll
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <AboutContainer id="about">
            <AboutWrapper>
                <TextWrapper>
                    <img className="blob" src={blob} alt="just some blob for decoration" />
                    <AboutH1>Effortless Vaping Experience</AboutH1>
                    <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</AboutP>
                    <Button>Get Started</Button>
                </TextWrapper>
                <ImgWrapper data-aos="fade-left" >
                    <img className="about-img" src={aboutImg} alt="Vaping Man"/>
                </ImgWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About;