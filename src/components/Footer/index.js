import { MDBFooter } from "mdb-react-ui-kit";
import React from "react";

const Footer = () =>{
    return(
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted mt-5  sticky-bottom top-100 w-100'>
            <section className='d-flex justify-content-center  p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                <span>Follow Us on social media:</span>
                </div>

                <div>
                <a href='' className='me-4 text-reset'>
                    <i className='fab fa-facebook-f'></i>
                </a>
                <a href='' className='me-4 text-reset'>
                    <i className='fab fa-instagram'></i>
                </a>
                <a href='' className='me-4 text-reset'>
                    <i className='fab fa-pinterest'></i>
                </a>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                <div className='row mt-3'>
                    <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                        Minimal Design Ltd
                    </h6>
                    <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                    </p>
                    <p>
                    Minimal D © 2021
                    </p>
                    </div>

                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Information</h6>
                    <p>
                        <a href='#!' className='text-reset'>
                        About
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Contact Us
                        </a>
                    </p>
                    </div>

                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                    <p>
                        <a href='#!' className='text-reset'>
                        All Products
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Shipping
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Refund
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        FAQ
                        </a>
                    </p>
                    </div>

                    <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                    <p>
                        <i className='fas fa-home me-3'></i> Los Angeles, USA
                    </p>
                    <p>
                        <i className='fas fa-envelope me-3'></i>
                        mindes@mda.com
                    </p>
                    <p>
                        <i className='fas fa-phone me-3'></i> +1(709)367-3533
                    </p>
                    </div>
                </div>
                </div>
            </section> 
    </MDBFooter>
    )
}

export default Footer;