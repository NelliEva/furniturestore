import { MDBRow, MDBCol, MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage, MDBCardBody, MDBTypography, MDBIcon } from "mdb-react-ui-kit";
import React from "react";

const Eco = () => {
    return(
        <>
        <MDBRow className="my-5">
            <MDBCol >
            <MDBCard background='dark' className='text-white rounded-1'>
                <MDBCardImage  className='ecoImg'  overlay src='https://images.unsplash.com/photo-1476589143317-647df3b59c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt='...' />
                <MDBCardOverlay>
                    <MDBCardTitle className="fs-1 pt-3 ps-3 mb-5" style={{fontFamily: 'DM Serif Display, monospace'}}>Enviroment is important for All</MDBCardTitle>
                    <MDBCol className=" mt-5 ms-5 ecoSubTitle" >
                           <MDBCardText style={{marginTop:'5rem'}} className="fs-3 mb-0">Protection</MDBCardText>
                            <hr className="my-0"  style={{marginRight:'15rem'}}/>
                            <MDBCardText style={{marginLeft:'2rem'}} className="fs-3 mb-0 ">Replantation</MDBCardText>
                            <hr style={{marginLeft: '2rem', marginRight:'12rem'}} className="my-0 text-right"/>
                            <MDBCardText style={{marginLeft:'4rem'}} className="fs-3 mb-0">Consciousness</MDBCardText>
                            <hr style={{marginLeft:'4rem', marginRight:'8rem'}} className="my-0"/>
                    </MDBCol>
                   
                </MDBCardOverlay>
            </MDBCard>

            </MDBCol>
        </MDBRow>
       <MDBRow  className="justify-content-center">
           <MDBCol lg='10'>
            <MDBCard >
                    <MDBRow className='g-0'>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle className="fs-4" style={{fontFamily: 'DM Serif Display, monospace'}}>Protection</MDBCardTitle>
                                <MDBCardText className="lh-lg fst-italic">
                                Donec rutrum varius luctus. Nunc ac ligula lacus. Fusce et euismod purus, ut sodales libero. Vestibulum eu aliquet urna, nec porttitor orci. Integer pretium auctor dolor nec tristique. Nullam nec nisi non dui ornare pretium eu a est. Suspendisse potenti. Curabitur nibh elit, mattis in arcu at, blandit volutpat nibh. Integer dapibus velit et porttitor semper. Suspendisse lacinia mi nec augue porta, id posuere felis convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pulvinar nisl id libero maximus maximus. Nam blandit sagittis tristique. Sed egestas imperdiet risus, vitae elementum mauris ultricies convallis. Quisque a augue convallis, pretium dolor in, ornare velit.
                                </MDBCardText>
                                <div className="d-flex justify-content-center"><MDBIcon fab icon="pagelines" size="3x"/></div>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol md='4' className="ecoSmallImg">
                        <MDBCardImage  src='https://images.unsplash.com/photo-1625132004262-2916eb7f00bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='...' fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
           </MDBCol>
       </MDBRow>
       <MDBRow className="my-5 justify-content-center">
           <MDBCol lg='11'>
            <MDBCard background='dark' className='text-white rounded-1'>
                <MDBCardImage  className='ecoImg'  overlay src='https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='...' />
                <MDBCardOverlay>
                    <MDBCardText>
                    <figure className='mb-0 mt-4'>
                        <MDBTypography >
                            <p style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}} className="fs-5 text-center text-wrap quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                        </MDBTypography>
                        <figcaption className='blockquote-footer mb-0 text-center' style={{color:'black',backgroundColor:'rgba(250, 250, 250, 0.5)', width:'15.5rem' }}>
                            Someone famous in <cite title='Source Title'>Source Title</cite>
                        </figcaption>
                    </figure>
                    </MDBCardText>
                </MDBCardOverlay>
            </MDBCard>
           </MDBCol>
       </MDBRow>
       <MDBRow  className="justify-content-center">
           <MDBCol lg='10'>
            <MDBCard >
                    <MDBRow className='g-0'>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle className="fs-4" style={{fontFamily: 'DM Serif Display, monospace'}}>Replantation</MDBCardTitle>
                                <MDBCardText className=" fst-italic">
                                 Integer dapibus velit et porttitor semper. Suspendisse lacinia mi nec augue porta, id posuere felis convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pulvinar nisl id libero maximus maximus. Nam blandit sagittis tristique. Sed egestas imperdiet risus, vitae elementum mauris ultricies convallis. Quisque a augue convallis, pretium dolor in, ornare velit.
                                </MDBCardText>
                                <div className="d-flex "><MDBIcon fas icon="tree" size="3x"/></div>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol md='4' className="ecoSmallImg">
                        <MDBCardImage  src='https://images.unsplash.com/photo-1515446134809-993c501ca304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='...' fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
           </MDBCol>
       </MDBRow>
       <MDBRow className="my-5 justify-content-center">
           <MDBCol lg='12'>
            <MDBCard background='dark' className='text-white rounded-1'>
                <MDBCardImage  className='ecoImg'  overlay src='https://images.unsplash.com/photo-1497219055242-93359eeed651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1449&q=80' alt='...' />
                <MDBCardOverlay>
                    <MDBCardText>
                    <figure className='mb-0 mt-4'>
                        <MDBTypography >
                            <p style={{backgroundColor:'rgba(250, 250, 250, 0.2)'}} className="fs-5 text-center text-wrap quote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
                        </MDBTypography>
                        <figcaption className='blockquote-footer mb-0'>
                            Someone famous in <cite title='Source Title'>Source Title</cite>
                        </figcaption>
                    </figure>
                    </MDBCardText>
                </MDBCardOverlay>
            </MDBCard>
           </MDBCol>
       </MDBRow>
       <MDBRow  className="justify-content-center">
           <MDBCol lg='10'>
            <MDBCard >
                    <MDBRow className='g-0'>
                        <MDBCol md='8'>
                            <MDBCardBody >
                                <MDBCardTitle className="fs-4" style={{fontFamily: 'DM Serif Display, monospace'}}>Consciousness</MDBCardTitle>
                                <MDBCardText className="lh-lg fst-italic">
                                Donec rutrum varius luctus. Nunc ac ligula lacus. Fusce et euismod purus, ut sodales libero. Vestibulum eu aliquet urna, nec porttitor orci. Integer pretium auctor dolor nec tristique. Nullam nec nisi non dui ornare pretium eu a est. Suspendisse potenti. Curabitur nibh elit, mattis in arcu at, blandit volutpat nibh. Integer dapibus velit et porttitor semper. Suspendisse lacinia mi nec augue porta, id posuere felis convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pulvinar nisl id libero maximus maximus. Nam blandit sagittis tristique. Sed egestas imperdiet risus, vitae elementum mauris ultricies convallis. Quisque a augue convallis, pretium dolor in, ornare velit.
                                </MDBCardText>
                                <div className="d-flex justify-content-center"><MDBIcon fas icon="recycle" size="3x" /></div>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol md='4' className="ecoSmallImg">
                        <MDBCardImage  src='https://images.unsplash.com/photo-1617873228868-f64a54e91a01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='...' fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
           </MDBCol>
       </MDBRow>
        </>
    )
}

export default Eco;