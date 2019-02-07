import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './styles.css';

const FullnameSchema = Yup.object().shape({
  fullname: Yup.string().max(50, 'Cannot be more than 30 characters').required('Required')
})

class ProfileForm extends React.Component {

  render() {
    return (
      <Formik
        initialValues={{
          fullname: 'Anonymous'
        }}
        validationSchema={FullnameSchema}
        onSubmit={val => {
          console.log(val);
        }}
      >
      {({ errors, touched }) => (

        <Form className="name-form">
          <Field
          type="text"
          name="fullname"
          id="fullname-input"
          autoFocus
          />
          {errors.fullname && touched.fullname ? (
            <div>{errors.fullname}</div>
          ) : null}
          <button id="fullname-button" type="submit">Enter</button>
        </Form>

      )}
      </Formik>
    )
  }
}

export default ProfileForm;