import { MDBContainer, MDBCol} from "mdbreact";
import React, {useState} from "react";
import HomeNavigation from "../HomeNavigation";

const HomePage = () => {

    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(true);

    function onClickNav() {
        setNav(true);
        setLogo(false)
    }

    return(
        
        <MDBContainer className="position-relative  containerHome"  >
          {logo &&    
                <MDBCol 
                    onClick={onClickNav}
                    lg='3'
                    className="
                        
                        d-flex 
                        align-items-center 
                    
                        shadow-5
                        rounded-1
                        animate__animated animate__fadeIn
                        hover
                        logoHome"
                    style={{backgroundColor: 'rgba(245, 245, 220, 0.3)', color:'black'}}>
                        <p className="fs-1 m-4 fw-bolder  text-nowrap" style={{fontFamily: 'Charm, cursive'}}>Minimal Design Ltd</p>
                </MDBCol> 
            }
               {nav && <HomeNavigation/> }
            <a href="/" className="aHome">
                <img  src='https://images.unsplash.com/photo-1634497885778-152eb6fd543d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
                    className='img-fluid shadow-4   animate__animated animate__fadeIn imgSize' 
                    alt='...'
                     />
            </a>
            <a href="/" className="aHome1">
                <img src='https://images.unsplash.com/photo-1586158291800-2665f07bba79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
                    className='img-fluid shadow-4  mx-2 animate__animated animate__fadeIn animate__slower imgSize1'
                    alt='...'
                     />
            </a>
            <a href="/" className="aHome2">
                <img src='https://images.unsplash.com/photo-1616628079057-a6f98d73054c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxmdXJuaXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
                    className='img-fluid shadow-4  mx-2 animate__animated animate__fadeIn animate__slower imgSize2'
                    alt='...'
                     />
            </a>
            <a href="/" className="aHome3">
                <img src='https://images.unsplash.com/photo-1581912492723-688317ba2162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80' 
                    className='img-fluid shadow-4  animate__animated animate__fadeIn imgSize3'
                    alt='...'
                     />
            </a>
            <a href="/" className="aHome4">
                <img src='https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI4fHxmdXJuaXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
                    className='img-fluid shadow-4  mx-2 animate__animated animate__fadeIn imgSize4'
                    alt='...'
                    />
            </a>


        </MDBContainer>

    )
}

export default HomePage;