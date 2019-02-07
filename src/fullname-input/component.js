import React from 'react';
import { Field } from 'formik';

const FullnameInput = (props) => {
  return (
    <div className="fullname-input-container">
      <Field
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={props.classname}
        id={props.name}
        autoComplete={props.autocomplete || "on"}
      />
    </div>
  )
}

export default FullnameInput