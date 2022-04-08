import { MDBContainer, MDBCol } from "mdbreact";
import React from "react";

const Img = () => {
    return(
        <MDBContainer className="mt-4 d-flex align-items-center imgContainer" style={{height:'40rem'}}>
            <img className="me-3   animate__animated animate__fadeIn animate__slower productImg "
                 alt='' src='https://images.unsplash.com/photo-1515852216175-927860d2be80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'/>
            <img className="me-3  productImg1"
                  alt='' src='https://images.unsplash.com/photo-1517858818796-d31fc694c92a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' />
            <img className="me-3  animate__animated animate__fadeIn animate__slower animate__delay-1s productImg2"
                 alt='' src='https://images.unsplash.com/photo-1612620535624-f6695d4864bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQyfHxmdXJuaXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            <MDBCol 
                    className="
                        
                        align-items-center 
                        justify-content-center
                        shadow-5
                        rounded-1
                        animate__animated animate__fadeIn 
                        hover
                        miniLogoBox
                        "
                    style={{backgroundColor: 'rgba(245, 245, 220, 0.3)', color:'black', height:'4rem', width:'12rem'}}>
                        <p className=" m-4 fw-bolder miniLogo" style={{fontFamily: 'Charm, cursive'}}>Minimal Design Ltd</p>
                </MDBCol> 
        </MDBContainer>
    )
}

export default Img;