import styled from "styled-components";

export const ProductsContainer = styled.section`
    width: 100%;
    height: 42em;
    background-image: linear-gradient(135deg, #011c29, #331f23);

    @media screen and (max-width: 820px) {
        height: auto;
    }
`;

export const ProductsWrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    padding-inline: 10px;

    @media screen and (max-width: 820px) {
        padding-block: 60px;
    }
`;

export const ProductsH1 = styled.h1`
    color: #fafafa;
    font-size: 3rem;
    line-height: 2.6rem;
    z-index: 10;
    text-align: center;

    @media screen and (max-width: 510px) {
        font-size: 2rem;
    }
`;

export const CardContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 545px) {
        grid-template-columns: 1fr;
    }
`;

export const ProductsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(221, 221, 221);
    border-radius: 10px;
    width: 250px;
    height: 365px;
    z-index: 10;
    text-align: center;
    box-shadow: 0 0 5px rgb(10, 10, 10);
    transition: all 0.4s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export const CardHeading = styled.h3`
    font-size: 1.4rem;
    color: #0d0d0d;
    line-height: 1.4rem;
    margin-top: 10px;
`;

export const CardDescription = styled.p`
    margin-top: 10px;
    color: #010101;
    line-height: 1.2rem;
`;

export const ProductsLink = styled.a`
    text-decoration: none;
    color: #00a8ff;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 1.2rem;
    
    &:hover {
        transform: scale(1.1);
    }
`;