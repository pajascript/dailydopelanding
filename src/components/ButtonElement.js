import styled from "styled-components";

export const Button = styled.a`
    padding: 0.9rem 2.4rem;
    text-decoration: none;
    color: #0d0d0d;
    background: #00a8ff;
    transition: all 400ms ease;
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    z-index: 10;

    &:hover {
        background: #6dceff;
    }

    @media screen and (max-width: 520px) {
        font-size: 1rem;
    }
`;