import { MDBContainer } from "mdbreact";
import React from "react";
import Nav from "../../components/products/Nav";
import Img from "../../components/products/Nav/Img";

const ProductsLayout = () => {
    return(
        <MDBContainer className="d-flex productContainer">
            <Nav/>
            <Img/>
        </MDBContainer>
    )
}

export default ProductsLayout;