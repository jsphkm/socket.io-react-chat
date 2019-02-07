import React from 'react';
import "./styles.css";
import FullnameInput from '../fullname-input/component';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';

const LandingPage = () => {
  return (
    <main className="landingpage-container">
      <a
      className="landingpage-header"
      href="https://github.com/jsphkm/socket.io-chat"
      rel="noopener noreferrer"
      target="_blank"
      >
        Socket.IO-Chat
      </a>
      <div className="landingpage-subcontainer">
        <div className="preview-container">
          <div className="preview-icon-container">
            <div className="preview-icon"></div>
            <div className="preview-initials">AN</div>
          </div>
          <div className="preview-fullname">Anonymous</div>
        </div>
        <Form className="name-form">
          <FullnameInput
          name="fullname"
          classname="fullname-input"
          type="text"
          placeholder="Your Full Name"
          />
          <button id="fullname-button" type="submit">Enter</button>
        </Form>
      </div>
    </main>
  )
}

const FullnameForm = withFormik({
  mapPropsToValues({fullname}) {
    return {
      fullname: fullname || ''
    }
  },
  validationSchema: Yup.object().shape({
    fullname: Yup.string().min(2).required()
  })
})(LandingPage)

export default LandingPage;