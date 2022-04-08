import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBBtn,
  MDBCollapse,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBRow } from 'mdbreact';

const Nav = () => {
    const [showBasic, setShowBasic] = useState(false);
    const [showShow, setShowShow] = useState(false);
    const [showShow2, setShowShow2] = useState(false);
    const [showShow3, setShowShow3] = useState(false);
    const [showShow4, setShowShow4] = useState(false);
    const [showShow5, setShowShow5] = useState(false);
    const [showShow6, setShowShow6] = useState(false);
    const [showShow7, setShowShow7] = useState(false);
    const [showShow8, setShowShow8] = useState(false);

    const toggleShow = () => setShowShow(!showShow);
    const toggleShow2 = () => setShowShow2(!showShow2);
    const toggleShow3 = () => setShowShow3(!showShow3);
    const toggleShow4 = () => setShowShow4(!showShow4);
    const toggleShow5 = () => setShowShow5(!showShow5);
    const toggleShow6 = () => setShowShow6(!showShow6);
    const toggleShow7 = () => setShowShow7(!showShow7);
    const toggleShow8 = () => setShowShow8(!showShow8);

    return (
      <MDBNavbar expand='lg' className='shadow-0 mt-5'  >
        <MDBContainer className='p-0' >
            <MDBNavbarToggler
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setShowBasic(!showBasic)}
            >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
  
          <MDBCollapse navbar className='h-auto collapseBox' show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 flex-column align-items-center' style={{fontFamily: 'DM Serif Display, monospace'}}>
                {/* ////////// Table*/}
                <MDBBtn onClick={toggleShow} color='rgba(245, 245, 220, 0.4)'
                         size=''
                         className='fs-6 mb-0 shadow-0 border-bottom productBtn mainBtn'>
                             Table
                </MDBBtn>
                <MDBCol>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)', }}>
                        <MDBCol >
                            <MDBCollapse show={showShow} className=''>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                
                                className='shadow-0 border-bottom text-capitalize py-2 hover_op productBtn'>
                                    Minimal
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow >
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize border-bottom py-2 hover_op productBtn'>
                                    Classic
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize py-2 hover_op productBtn productBtn'>
                                    Modern
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                {/* ///////////Chair */}
                <MDBBtn onClick={toggleShow2}
                    color='rgba(245, 245, 220, 0.4)'
                    size=''
                    className='fs-6 mt-0 mb-0 shadow-0 border-bottom  productBtn mainBtn'>
                        Chair
                </MDBBtn>
                <MDBCol>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol >
                            <MDBCollapse show={showShow2} className=''>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 border-bottom text-capitalize py-2 hover_op productBtn'>
                                    Minimal
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow2}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize py-2 hover_op productBtn'>
                                    Classic
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                 {/* ////////// Canape*/}
                 <MDBBtn onClick={toggleShow3} color='rgba(245, 245, 220, 0.4)'
                         size=''
                         className='fs-6 mt-0 mb-0 shadow-0 border-bottom productBtn mainBtn'>
                             Canape
                </MDBBtn>
                <MDBCol>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)', }}>
                        <MDBCol >
                            <MDBCollapse show={showShow3} className=''>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 border-bottom text-capitalize py-2 hover_op productBtn'>
                                    Minimal
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow >
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow3}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize border-bottom py-2 hover_op productBtn'>
                                    Classic
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow3}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize py-2 hover_op productBtn'>
                                    Modern
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                {/* ///////////Lamp */}
                <MDBBtn onClick={toggleShow4}
                    color='rgba(245, 245, 220, 0.4)'
                    size=''
                    className='fs-6 mt-0 mb-0 shadow-0 border-bottom productBtn mainBtn'>
                        Lamp
                </MDBBtn>
                <MDBCol>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol >
                            <MDBCollapse show={showShow4} className=''>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 border-bottom text-capitalize py-2 hover_op productBtn'>
                                    Minimal
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow4}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize py-2 hover_op productBtn'>
                                    Classic
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                {/* ///////Stands */}
                <MDBBtn onClick={toggleShow5} color='rgba(245, 245, 220, 0.4)'
                         size=''
                         className='fs-6 mt-0 mb-0 shadow-0 border-bottom productBtn mainBtn'>
                             Stand
                </MDBBtn>
                <MDBCol>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)', }}>
                        <MDBCol >
                            <MDBCollapse show={showShow5} className=''>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 border-bottom text-capitalize py-2 hover_op productBtn'>
                                    Minimal
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow >
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow5}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize border-bottom py-2 hover_op productBtn'>
                                    Classic
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow5}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize py-2 hover_op productBtn'>
                                    Modern
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                {/* ///////////Rug */}
                <MDBBtn onClick={toggleShow6}
                    color='rgba(245, 245, 220, 0.4)'
                    size=''
                    className='fs-6 mt-0 mb-0 shadow-0 border-bottom productBtn mainBtn'>
                        Rug
                </MDBBtn>
                <MDBCol>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol >
                            <MDBCollapse show={showShow6} className=''>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 border-bottom text-capitalize py-2 hover_op productBtn'>
                                    Minimal
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow6}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize py-2 hover_op productBtn '>
                                    Classic
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                 {/* ////////// Pillow*/}
                 <MDBBtn onClick={toggleShow7} color='rgba(245, 245, 220, 0.4)'
                         size=''
                         className='fs-6 mt-0 mb-0 shadow-0 border-bottom productBtn mainBtn'>
                             Pillow
                </MDBBtn>
                <MDBCol>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)', }}>
                        <MDBCol >
                            <MDBCollapse show={showShow7} className=''>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 border-bottom text-capitalize py-2 hover_op productBtn'>
                                    Minimal
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow >
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow7}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize border-bottom py-2 hover_op productBtn'>
                                    Classic
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow7}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize py-2 hover_op productBtn'>
                                    Modern
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                {/* ///////////Deco */}
                <MDBBtn onClick={toggleShow8}
                    color='rgba(245, 245, 220, 0.4)'
                    size=''
                    className='fs-6 mt-0 mb-0 shadow-0 border-bottom productBtn mainBtn'>
                        Deco
                </MDBBtn>
                <MDBCol>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol >
                            <MDBCollapse show={showShow8} className=''>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 border-bottom text-capitalize py-2 hover_op productBtn'>
                                    Minimal
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow style={{backgroundColor: 'rgba(245, 245, 220, 0.7)'}}>
                        <MDBCol>
                            <MDBCollapse show={showShow8}>
                                <MDBBtn color='rgba(245, 245, 220, 0.4)'
                                className='shadow-0 text-capitalize py-2 hover_op productBtn'>
                                    Classic
                                </MDBBtn>
                            </MDBCollapse>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
  );
}

export default Nav;