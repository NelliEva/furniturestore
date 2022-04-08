import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import Regsiter from '../Register';

const SignIn=() => {

    const [register, setRegister] = useState(false);
    const [signin, setSignin] = useState(true);
    
  function showRegister () {
    setRegister(true);
    setSignin(false);
  }
  function showSignin () {
    setRegister(false);
    setSignin(true);
  }

  const [formValue, setFormValue] = useState({
    fname: 'Test',
    psw: 'Test1',
    email: 'test@gmail.com'
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
      <>
    {signin &&
    <MDBValidation className='col-md-4 row g-3 d-flex flex-column align-items-center shadow-5 p-3 mb-5' style={{backgroundColor: 'rgba(245, 245, 220, 0.3)'}}>
      <MDBValidationItem feedback='Please add an email' invalid className='col-md-10'>
        <MDBInput 
            onChange={onChange}
            label='Email'
            type='text'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Email'
            required
          >
        </MDBInput>
      </MDBValidationItem>
      <MDBValidationItem feedback='Please add a password' invalid className='col-md-10'>
        <MDBInput
          name='psw'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Password'
          type='password'
        />
      </MDBValidationItem>
      <div className='col-md-10'>
        <MDBBtn color='dark' type='submit'>Sign In</MDBBtn>
        <p className='fs-6'>Don't have an account?<strong style={{color: 'black'}} onClick={showRegister}> Register</strong></p>
      </div>
    </MDBValidation>
}
   { register && <Regsiter showSignin={showSignin}/>}
    </>
  );
}

export default SignIn;