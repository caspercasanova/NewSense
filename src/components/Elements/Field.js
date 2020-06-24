import React from 'react'


/* 
TODO: Add Styling and possible check method for dynamic styling of Label


*/

const Field = ({id, label, type, placeholder, required, autoComplete, value, onChange}) => {
  return(
    <div className='Field Blue'>
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
    </div>
  )
}


export default Field