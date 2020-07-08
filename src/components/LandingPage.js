import React,{useState} from 'react'
import {useToggle} from './utils'
import Countdown from './Widgets/Countdown'
import Field from '../components/Elements/Field'
import TypedMessage from './Widgets/TypedMessage'

import NSAlogo from '../NSAbrainDaggertrans.png'
import {useAuth} from '../firebase/Auth'

import TextField from './Elements/Textfield'
import styled from 'styled-components'


const FormContainer = styled.form` 
  margin-top: 10px;
  margin-bottom: 10px;
`; 





export default function LandingPage({loginFunction}) {
  const [isSignedIn, setIsSignedIn] = useToggle(true) //toggles forms
  
  return (
    <div  className='Landing_Page'>
      <div>
        <div><img style={{width: '50px'}} src={NSAlogo} alt='logo'/></div> 
      </div>

      <div style={{display: "flex", justifyContent:'space-between'}}>
        <div> 
          <h1 className='blink_soft'> <TypedMessage message={"New Sense Active"}/></h1>
          
          {isSignedIn 
            ? <LoginBox setIsSignedIn={setIsSignedIn}/>
            : <button onClick={loginFunction} className="basic_btn blink_soft">Enter</button>
          }
        </div>
        <div >
          <TextField>
            <h2>Sorry for the inconvienence</h2>
            <p>N.S.A. is currently undergoing a major code refactor.</p>
            <p>The development team is currently working on the following:</p>
            <p>- Converting Our Server Routes To Cloud Function</p>  
            <p>- Testing New Design Aesthetitic</p>  
            <hr></hr>
            <p>Estimated Time Until We Are Back Up And Properly Running</p>
            <Countdown  date={'2020-07-13'}/>
          </TextField>
        </div>
      </div>
    </div>
  )
}




const LoginBox = (setIsSignedIn) => {
  const [login, toggleLogin] = useToggle(true)
  const [resetPassword, toggleResetPassword] = useToggle()

  const auth = useAuth()
  return(
    <div>
      { resetPassword 
        ? <ResetPassword toggleResetPassword={toggleResetPassword} /> 
        : 
        <>
          <div style={{width: '100%', display: 'flex',}}>
            <button style={{width: '100%'}} onClick={()=> toggleLogin(true)} className="basic_btn ">Sign In</button>
            <button style={{width: '100%'}} onClick={() => toggleLogin(false)} className="basic_btn">Sign Up</button>
          </div>

          { login 
            ? <SignInForm setIsSignedIn={setIsSignedIn}/> 
            : <SignUpForm /> 
          }
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <button className="basic_btn" onClick={auth.signInWithGoogle}>Sign In With Google</button>
            <button onClick={toggleResetPassword} className="basic_btn">Reset Password</button>
          </div>
        </>
      }
    </div>
  )
}

const ResetPassword = ({toggleResetPassword}) => {
  const [email, setEmail] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    //! Test this functionality soon!
  }
  return(
    <FormContainer onSubmit={handleSubmit}>
    
        <button onClick={toggleResetPassword} className="basic_btn">Back</button>
        <h6><TypedMessage message={"Reset Password:"}/></h6>
        <h6><TypedMessage message={"Please Enter Your Email Address"}/></h6>
        <Field type={'email'} value={email} onChange={(e) => setEmail(e.target.value)}  label={"Email"}/>
        <button type="submit" className="basic_btn">Submit</button>
    
    </FormContainer>
  )
}



const SignInForm = (setIsSignedIn) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 // const [error, setError] = useState(false)

  const auth = useAuth()

  const submitHandler = (event) => {
    event.preventDefault()
    auth.signin(email, password)
  }

  return (
  <FormContainer onSubmit={submitHandler}>
  
    <h6><TypedMessage message={"Login"}/></h6>
    <h6><TypedMessage message={"Please Fill Out The Information Below"}/></h6>
    <Field type={'email'} value={email} onChange={(e) => setEmail(e.target.value)}  label={"Email"}/>
    <Field type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} label={"Password"}/>
    <button type="submit" className="basic_btn">Login</button>

  </FormContainer>
  )
}


const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    // must be at least 6 digits long
  // const [error, setError] = useState(false)
  const auth = useAuth()
  const handleSubmit = (event) => {
    event.preventDefault()
    auth.signup(email, password)
  }
  return (
  <FormContainer onSubmit={handleSubmit}>
    
    <h6><TypedMessage message={"Create Account:"}/></h6>
    <h6><TypedMessage message={"Please Fill Out The Information Below"}/></h6>
    <Field type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} label={"Email"}/>
    <Field type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} label={"Password"}/>
    <button type="submit" className="basic_btn">Create Account</button>
  
  </FormContainer>
  )
}