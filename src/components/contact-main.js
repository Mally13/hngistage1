import React from 'react';
import { Formik } from 'formik';


function ContactMain(){
  return (
    <div className='contact_page'>
        <div className='heading'>
            <div className='heading_1'>
                Contact Me
            </div>
            Hi there, contact me to ask me about anything you have in mind.
        </div>
        <Formik className='contact-form'
            initialValues={{first_name:'', last_name:'', email:'', message:'',agree:false}}
            validate={values=>{
                const errors={};
                if(!values.first_name){
                    errors.first_name='Required'
                }if(!values.last_name){
                    errors.last_name='Required'
                }if(!values.email){
                    errors.email='Required'
                }if(!values.message){
                    errors.message='Required'
                }if(values.agree!==true){
                    errors.agree='Required'
                }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 5));
                  setSubmitting(false);
            }, 400);
        }}>
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
            <div className='fullname'>
                <div className='form-field'>
                    <label for="first_name">First name</label>
                    <input type="text" id="first_name" name="first_name" onChange={handleChange} onBlur={handleBlur} value={values.first_name}/>
                </div>
                <div className='form-field'>
                    <label for="last_name">Last name</label>
                    <input type="text" id="last_name" name="last_name" onChange={handleChange} onBlur={handleBlur} value={values.last_name}/>
                </div>
            </div>
            <div className='form-field'>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>

            </div>

            <div className='form-field'>
                <label for="message">Message</label>
                <textarea  id="message" name="message" onChange={handleChange} onBlur={handleBlur} value={values.message}/>
            </div>
            <div className='form-field'>
                <input type="checkbox" id="agree" name="agree" onChange={handleChange} onBlur={handleBlur} value={values.agree}/>
                <label for="agree">You agree to providing your data to Mary who may contact you.</label><br></br>
            </div>
            <div className='form-field'>
                <input type="submit" id="submit" value="Send Message"/>
            </div>
        </form>)}
        </Formik>
    </div>  
    
  )
}

export default ContactMain;