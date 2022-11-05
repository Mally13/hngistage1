import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function ContactMain(){
    const initialValues={
        first_name:'',
        last_name:'',
        email:'',
        message:'',
        agree:false,
    }
const ContactSchema = Yup.object().shape({
    first_name: Yup.string()
        .required('Please enter your first name'),
    last_name: Yup.string()
        .required('Please enter your last name'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Please enter your email'),
    message:Yup.string()
    .required('Please enter your message'),
    agree:Yup.bool()
        .oneOf([true], 'Required')
    });
    function onSubmit({
        first_name, last_name,email, message, agree
    },{ setStatus, setSubmitting }) {
        

        setStatus();
        let contactformData = new FormData();
        
    
        contactformData.append('first_name',first_name)
        contactformData.append('last_name',last_name)
        contactformData.append('email',email)
        contactformData.append('message',message)
        contactformData.append('agree',agree)


        console.log(contactformData);

    }

  return (
    <div className='contact_page'>
        <div className='heading'>
            <div className='heading_1'>
                Contact Me
            </div>
            Hi there, contact me to ask me about anything you have in mind.
        </div>
        <Formik className='contact-form'
            initialValues={initialValues}
            validationSchema={ContactSchema} onSubmit={onSubmit}>
            {({values, errors, touched, isSubmitting }) => (

        <Form>
            <div className='fullname'>
                <div className='form-field'>
                    <label>First name</label>
                    <Field type="text" id="first_name" name="first_name" className={'form-control' + (errors.first_name && touched.first_name? ' is-invalid' : '')}/>
                    <ErrorMessage name="first_name" component="div" className="invalid-feedback" />
                </div>
                <div className='form-field'>
                    <label>Last name</label>
                    <Field type="text" id="last_name" name="last_name" className={'form-control' + (errors.last_name && touched.last_name ? ' is-invalid' : '')}/>
                    <ErrorMessage name="last_name" component="div" className="invalid-feedback" />
                </div>
            </div>
            <div className='form-field'>
                <label>Email</label>
                <Field type="email" id="email" name="email" className={'form-control' + (errors.email && touched.email? ' is-invalid' : '')}/>
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>

            <div className='form-field'>
                <label>Message</label>
                <Field as='textarea' id="message" name="message" className={'form-control' + (errors.message&& touched.message ? ' is-invalid' : '')}/>
                <ErrorMessage name="message" component="div" className="invalid-feedback" />
            </div>
            <div className='form-field'>
                <Field type="checkbox" id="agree" name="agree" className={'form-control' + (errors.agree && touched.agree ? ' is-invalid' : '')}/>
                <span class="mark"></span>
                <label className='agree'>You agree to providing your data to Mary who may contact you.</label><br/>
                {/* <ErrorMessage name="agree" component="div" className="invalid-feedback" /> */}
            </div>
            <div className='form-field'>
                <button type="submit" id="btn__submit" disabled={isSubmitting} >
                {isSubmitting?
                    <div>Sending message ...</div>
                    :"Send Message"
                }
                </button>
            </div>
        </Form>)}
        </Formik>
    </div>  
    
  )
}

export default ContactMain;