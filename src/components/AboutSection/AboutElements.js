import styled from "styled-components";

export const AboutContainer = styled.section`
    background-image: linear-gradient(135deg, #2e1c20, #001824);
    height: 42em;

    @media screen and (max-width: 380px) {
        height: auto;
    }
`;

export const AboutWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    gap: 10px;
    position: relative;
    overflow: hidden;
    padding: 0 20px;

    @media screen and (max-width: 380px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 25px;
    }
    @media screen and (max-width: 550px) {
        padding-block: 60px;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: flex-start;
    gap: 25px;
    flex-direction: column;
    max-width: 50%;

    @media screen and (max-width: 380px) {
        max-width: 100%;
        align-items: center;
    }
`;

export const AboutH1 = styled.h1`
    color: #fafafa;
    font-size: 3rem;
    line-height: 2.6rem;
    z-index: 10;
    font-weight: bold;

    @media screen and (max-width: 510px) {
        font-size: 2rem;
    }
`;

export const AboutP = styled.p`
    color: rgb(230, 230, 230);
    font-size: 1.3rem;
    line-height: 1.5rem;
    z-index: 10;

    @media screen and (max-width: 510px) {
        font-size: 1rem;
    }
`;

export const ImgWrapper = styled.div`
    max-width: 265px;
    height: auto;
    z-index: 10;
`;