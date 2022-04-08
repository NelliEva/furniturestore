import { MDBCard, MDBCardBody, MDBCol } from "mdbreact";
import React from "react";

const HomeNavigation = () => {
    return (
        <>
        <MDBCol
        className="
                        d-flex 
                        align-items-center 
                        navContainer
                        ">
           <MDBCard className="rounded-0 shadow-0" style={{width:'21rem'}}>
                <MDBCardBody className="d-flex justify-content-center flex-wrap p-0 navCardContainer" >
                   <MDBCard  style={{width:'10rem', backgroundColor:'rgba(245, 245, 220, 0.3)', fontFamily: 'DM Serif Display, monospace'}} className='text-center rounded-0 me-1 mb-1 hover align-content-center hover_opacity'>
                        <MDBCardBody className="fs-4 p-3">
                           <a href='products' style={{ color:'rgba(0, 0, 0, 0.5)'}}>Products</a>
                        </MDBCardBody>
                   </MDBCard>
                   <MDBCard style={{width:'10rem', backgroundColor:'rgba(245, 245, 220, 0.3)', color:'rgba(0, 0, 0, 0.5)', fontFamily: 'DM Serif Display, monospace'}} className='text-center rounded-0 mb-1 hover align-content-center hover_opacity'>
                        <MDBCardBody className="fs-4 p-3">
                            <a href='account' style={{ color:'rgba(0, 0, 0, 0.5)'}}>Account</a>
                        </MDBCardBody>
                   </MDBCard>
                   <MDBCard style={{width:'10rem', backgroundColor:'rgba(245, 245, 220, 0.3)', color:'rgba(0, 0, 0, 0.5)', fontFamily: 'DM Serif Display, monospace'}} className='text-center rounded-0 me-1 hover align-content-center hover_opacity'>
                        <MDBCardBody className="fs-4 p-3">
                            <a href='about' style={{ color:'rgba(0, 0, 0, 0.5)'}}>About</a>
                        </MDBCardBody>
                   </MDBCard>
                   <MDBCard style={{width:'10rem', backgroundColor:'rgba(245, 245, 220, 0.3)', color:'rgba(0, 0, 0, 0.5)', fontFamily: 'DM Serif Display, monospace'}} className='text-center rounded-0 hover align-content-center hover_opacity'>
                        <MDBCardBody className="fs-4 p-3">
                            <a href='eco' style={{ color:'rgba(0, 0, 0, 0.5)'}}>Eco</a>
                        </MDBCardBody>
                   </MDBCard>
                </MDBCardBody>
               </MDBCard>
        </MDBCol>
        <MDBCol 
                    className="
                        position-absolute 
                        d-flex 
                        align-items-center 
                        w-auto
                        shadow-5
                        rounded-1
                        animate__animated animate__fadeIn
                        hover
                        logoHomeMini"
                    style={{backgroundColor: 'rgba(245, 245, 220, 0.3)', color:'black', height:'4rem'}}>
                        <p className=" m-4 fw-bolder text-nowrap " style={{fontFamily: 'Charm, cursive'}}>Minimal Design Ltd</p>
                </MDBCol> 
        </>

    )
}

export default HomeNavigation;