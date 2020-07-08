import React from 'react'
import styled from 'styled-components'

/* 
TODO: Add Styling and possible check method for dynamic styling of Label
*/


// const Input = styled.input`
//   font-size: 20px;
//   letter-spacing: .3em;
//   padding: 0px 0px 10px 0px;
//   border: none;
//   border-left: 1px solid ;
//   border-bottom: 1px solid ;
//   color: '';
// `;
// const Label = styled.label`
//   color: '';
//   position: absolute;
//   display: block;
//   padding: 0.5em;
//   transition: 0.5s;
//   top: 0%;
//   left: 0%;
//   cursor: inherit;
// `
// const FieldContainer = styled.div`
//   position: relative;
//   margin-top: 40px;
// `





const Field = ({id, label, type, placeholder, required, autoComplete, value, onChange, error}) => {
  return(
    <div className='Field'>
      <input
        className="FieldInput" 
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id} className='FieldLabel'>{label}</label>
      {error && <label htmlFor={id} className='ErrorLabel'>{error.message}</label>}

    </div>
  )
}


export default Field