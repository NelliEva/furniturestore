import { MDBContainer } from "mdbreact";
import React from "react";
import SignIn from '../../components/account/SignIn';

const AccountLayout = () => {




    return(
        <MDBContainer className="my-5 pt-5 d-flex justify-content-center">
            <SignIn />
        </MDBContainer>
    )
}

export default AccountLayout;