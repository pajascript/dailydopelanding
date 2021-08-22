import React from "react";
import {ProductsContainer, 
        ProductsWrapper,
        ProductsH1,
        CardContainer,
        ProductsCard,
        CardHeading,
        CardDescription,
        ProductsLink
        } from "./ProductsElements";
import devices from "../../images/cali g.jpg";
import ejuice from "../../images/e juice.jpg";
import accessories from "../../images/accessories.jpg";
import { BsArrowRight } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react/cjs/react.development";

const Products = () => {
    //Animate on Scroll
    useEffect(() => {
        Aos.init({ duration: 1500})
    }, [])

    return (
        <ProductsContainer id="products">
            <ProductsWrapper>
                <ProductsH1>Available Products</ProductsH1>
                <CardContainer>
                    <ProductsCard data-aos="fade-right" >
                        <img className="products" src={devices} alt="Vape Pod Devices" />
                        <CardHeading>Devices</CardHeading>
                        <CardDescription>Lorem ipsum dolor sit amet, consectetur apidiscing elit</CardDescription>
                    </ProductsCard>
                    <ProductsCard data-aos="zoom-out" >
                        <img className="products" src={ejuice} alt="E-juices" />
                        <CardHeading>E-liquids</CardHeading>
                        <CardDescription>Lorem ipsum dolor sit amet, consectetur apidiscing elit</CardDescription>
                    </ProductsCard>
                    <ProductsCard data-aos="fade-left" >
                        <img className="products" src={accessories} alt="Vape Pod Accessories" />
                        <CardHeading>Accessories / Replacements</CardHeading>
                        <CardDescription>Lorem ipsum dolor sit amet, consectetur apidiscing elit</CardDescription>
                    </ProductsCard>
                </CardContainer>
                <ProductsLink>See all in shop <BsArrowRight /></ProductsLink>
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products;