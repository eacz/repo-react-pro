 import { Formik, Form } from 'formik'
import { Input } from '../components/Formik'
import * as Yup from 'yup';

import '../styles/styles.css'

const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{ name: '', email: '', password1: '', password2: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string().min(2, 'The name must have at least 2 characters').max(15, 'The name must have a maximum of 15 characters').required('The name is required'),
          email: Yup.string().email().required('The email is required'),
          password1: Yup.string().min(6, 'The password must have at least 6 characters').required('This field is required'),
          password2: Yup.string().oneOf([Yup.ref('password1')], 'Password must match').required('This field is required')
        })}
      >
        {({ resetForm }) => (
          <Form>
            <Input name='name' label='Name' type='text' placeholder='Write your name' />
            <Input name='email' label='Email' type='email' placeholder='Write your email' />
            <Input name='password1' label='Password' type='password' placeholder='Password' />
            <Input name='password2' label='Repeat password' type='password' placeholder='Repeat password' />
            <button type='submit'>Create</button>
            <button type='button' onClick={() => resetForm()}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterFormikPage
