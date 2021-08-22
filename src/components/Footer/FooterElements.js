import styled from "styled-components";

export const FooterContainer = styled.section`
    width: 100%;
    height: 18em;
    background: #0d0d0d;
`;

export const FooterWrapper = styled.div`
    margin-inline: auto;
    width: 100%;
    max-width: 1100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

export const SocMeds = styled.div`
    color: #00a8ff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 2rem;
    gap: 50px;
    cursor: pointer;
`;

export const Logo = styled.img`
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
`;

export const FooterInfo = styled.ul`
    display: flex;
    gap: 1.5rem;
    margin-top: 40px;
`;

export const InfoLi = styled.li`
    text-decoration: none;
    list-style: none;
    color: #fafafa;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const TermsOfUse = styled.ul`
    display: flex;
    gap: 1.5rem;
`;

export const FooterCopyright = styled.p`
    color: #ccc;
`;