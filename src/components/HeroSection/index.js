import React from "react";
import {HeroContainer,
        HeroH1,
        HeroP,
        HeroBtn
    } from "./HeroElements";

import { Button } from "../ButtonElement";

const HeroSection = () => {
    return (
        <>
        <HeroContainer id="home">
            <HeroH1>Choose your <span className="highlightedText">flavor</span></HeroH1>
            <HeroP>Don't play with your lungs. Start Vaping!</HeroP>
            <Button>Shop Now</Button>
        </HeroContainer>
        </>
    )
}

export default HeroSection;