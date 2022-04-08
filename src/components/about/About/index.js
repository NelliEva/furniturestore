import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";

const About = () => {
    return(
        <MDBContainer className="my-5 d-flex flex-wrap animate__animated animate__fadeIn animate__slow aboutContainer">
            {/* <p className="w-100 fs-1 m-4  text-center" style={{fontFamily: 'Charm, cursive', color:'grey'}}>Minimal Design Ltd</p> */}
            <MDBCol className="" lg='2' >
                <img className="aboutImg" alt='' src="https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
            </MDBCol>
          
            <MDBCol className="mt-5 aboutTitle" lg='6'>
                <p className="mt-5 me-5 fs-1 border-bottom  ps-5 " style={{fontFamily: 'Charm, cursive'}}>About</p>
            </MDBCol>
            <MDBCol  lg='6' sm='9' md='10' className="  firstP" >
                <p className="p-4 pt-0 lh-lg " style={{fontFamily: 'DM Serif Display, monospace'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
            </MDBCol>
            <MDBRow className=" pt-5 d-flex align-items-center aboutRow middleRow">
                <MDBCol lg='6' size={12} className='secondP'>
                    <p className="p-4 lh-lg " style={{fontFamily: 'DM Serif Display, monospace'}}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                </MDBCol>
                <MDBCol lg='6' size={10} className='secondImg d-flex justify-content-center' >
                    <img className="aboutImg1" alt="" src="https://images.unsplash.com/photo-1616627455142-30a61ead0811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=660&q=80" />
                </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex align-items-center justify-content-center aboutRow mb-5">
                <MDBCol lg='6' size={10} className='d-flex justify-content-center'>
                    <img className="aboutImg2" alt="" src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxmdXJuaXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                </MDBCol>
                <MDBCol lg='6' size={12}>
                    <p className="p-4 lh-lg " style={{fontFamily: 'DM Serif Display, monospace'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.  </p>
                </MDBCol>
                <MDBCol lg='9' className="  d-flex  aboutEnd">
                   <hr className="aboutHr"/>
                   <p className="fs-5 lastP" style={{fontFamily: 'Charm, cursive'}}>Our Team</p>
                </MDBCol>
            </MDBRow>
       
        </MDBContainer>
    )
}

export default About;