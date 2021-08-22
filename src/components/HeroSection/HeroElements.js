import styled from "styled-components";
import Background from "../../images/bg.jpg";

export const HeroContainer = styled.section`
    position: relative;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${Background});
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.4);
    background-position: center left;
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    padding: 0 10px;
    text-align: center;
    gap: 25px;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 5rem;
    line-height: 4rem;

    @media screen and (max-width: 820px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 420px) {
        font-size: 3rem;
    }
`;

export const HeroP = styled.p`
    font-size: 1.4rem;
    color: #fff;
    margin-top: 15px;

    @media screen and (max-width: 420px) {
        font-size: 1rem;
    }
`;