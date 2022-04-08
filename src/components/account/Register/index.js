import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

const Regsiter=({showSignin}) => {
  const [formValue, setFormValue] = useState({
    fname: 'Test',
    psw: 'Test1',
    psw2:'Test1',
    email: 'test@gmail.com'
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MDBValidation className='col-md-4 row g-3 d-flex flex-column align-items-center shadow-5 p-3 mb-5' style={{backgroundColor: 'rgba(245, 245, 220, 0.3)'}}>
      <MDBValidationItem feedback='Please add a Name.'invalid  className='col-md-10'>
        <MDBInput
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          required
          label='Name'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please add an email.' invalid className='col-md-10'>
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
      <MDBValidationItem feedback='Please add a password.' invalid className='col-md-10'>
        <MDBInput
          name='psw'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Password'
          type='password'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please confirm the password.' invalid className='col-md-10'>
        <MDBInput
          name='psw2'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Confirm Password'
          type='password'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-10' feedback='You must agree before submitting.' invalid>
        <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
      </MDBValidationItem>
      <div className='col-md-10'>
        <MDBBtn color='dark' type='submit'>Register</MDBBtn>
        <p className='fs-6'>Have an account already?<strong href='' style={{color: 'black'}} onClick={showSignin}> Sign In</strong></p>
      </div>
    </MDBValidation>
  );
}

export default Regsiter;