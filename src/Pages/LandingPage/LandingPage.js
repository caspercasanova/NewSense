import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Hooks
import { useToggle } from '../../Utilities/utils';
import { useAuth } from '../../Firebase/Auth';
// Elements
import Field from '../../components/Elements/Field';
import TypedMessage from '../../components/Elements/TypedMessage';
import PreviousUpdates from './PreviousUpdates';
import NSAlogo from '../../NSAbrainDaggertrans.png';

const FormContainer = styled.form` 
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LandingPageContainer = styled.div`
  font-family: 'digital-7';
  height: 100%;
  width: 100%;
  display: flex;
  border: 1px solid cyan;
  overflow: hidden;
  padding-right: 25px;
`;

export default function LandingPage({ loginFunction }) {
  const [isSignedIn, setIsSignedIn] = useToggle(true);
  const [hovered, toggleHovered] = useToggle();

  return (
    <LandingPageContainer>
      <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0' }}>

        <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto auto' }}>
          <div
            onMouseOver={toggleHovered}
            onFocus={toggleHovered}
            onMouseOut={toggleHovered}
            onBlur={toggleHovered}
          >
            <img style={{ width: '50px' }} src={NSAlogo} alt="logo" />
          </div>
          {!hovered && (
            <h1 className="blink_soft">
              <TypedMessage message="New Sense Active" />
            </h1>
          )}
          {hovered && (
            <h1 className="blink_soft">
              <TypedMessage message="All Be Demanded" />
            </h1>
          )}

          <div style={{ width: '22em' }}>
            {isSignedIn
              ? <LoginBox setIsSignedIn={setIsSignedIn} />
              : <button type="button" onClick={loginFunction} className="basic_btn blink_soft">Enter</button>
            }
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: '1.5 1 0' }}>
        <PreviousUpdates />
      </div>

    </LandingPageContainer>
  );
}

LandingPage.propTypes = {
  loginFunction: PropTypes.func,
};

/* --------------------------- Login Components -------------------------- */

const LoginBox = ({setIsSignedIn}) => {
  const [login, toggleLogin] = useToggle(true);
  const [resetPassword, toggleResetPassword] = useToggle();

  const auth = useAuth();
  return (
    <div>
      { resetPassword
        ? <ResetPassword toggleResetPassword={toggleResetPassword} />
        : (
          <>
            <div style={{ width: '100%', display: 'flex' }}>
              <button type="button" style={{ width: '100%' }} onClick={()=> toggleLogin(true)} className="basic_btn ">Sign In</button>
              <button type="button" style={{ width: '100%' }} onClick={() => toggleLogin(false)} className="basic_btn">Sign Up</button>
            </div>

            { login
              ? <SignInForm />
              : <SignUpForm />
            }
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button type="button" className="basic_btn" onClick={auth.signInWithGoogle}>Sign In With Google</button>
              <button type="button" onClick={toggleResetPassword} className="basic_btn">Reset Password</button>
            </div>
          </>
        )}
    </div>
  );
};

LoginBox.propTypes = {
  setIsSignedIn: PropTypes.func.isRequired,
};

/* ------------------------ Reset Password Component ------------------------ */

const ResetPassword = ({ toggleResetPassword }) => {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    //! Test this functionality soon!
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <button type="button" onClick={toggleResetPassword} className="basic_btn">Back</button>
      <h6><TypedMessage message="Reset Password:" /></h6>
      <h6><TypedMessage message="Please Enter Your Email Address" /></h6>
      <Field type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
      <button type="submit" className="basic_btn">Submit</button>
    </FormContainer>
  );
};

ResetPassword.propTypes ={
  toggleResetPassword: PropTypes.func.isRequired,
};

/* ------------------------------- SignInForm ------------------------------- */

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // TODO Add error handling
  // const [error, setError] = useState(false)
  const auth = useAuth();

  const submitHandler = (event) => {
    event.preventDefault();
    auth.signin(email, password);
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <h6><TypedMessage message="Login" /></h6>
      <h6><TypedMessage message="Please Fill Out The Information Below" /></h6>
      <Field type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
      <Field type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
      <button type="submit" className="basic_btn">Login</button>
    </FormContainer>
  );
};

/* ------------------------------- SignUpForm ------------------------------- */

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // TODO error handling
  // must be at least 6 digits long
  // const [error, setError] = useState(false)
  const auth = useAuth();
  const handleSubmit = (event) => {
    event.preventDefault();
    auth.signup(email, password);
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <h6><TypedMessage message="Create Account:" /></h6>
      <h6><TypedMessage message="Please Fill Out The Information Below" /></h6>
      <Field type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
      <Field type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
      <button type="submit" className="basic_btn">Create Account</button>
    </FormContainer>
  );
};
