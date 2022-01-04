import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'should have 15 characters or less').required('required'),
          lastName: Yup.string().max(10, 'should have 10 characters or less').required('required'),
          email: Yup.string().email('Invalid email').required('required'),
        })}
      >
        {_formik => (
          <Form>
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage component="span" name='firstName' />

            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage component="span" name='lastName' />

            <label htmlFor='email'>Email Address</label>
            <Field name='email' type='email' />
            <ErrorMessage component="span" name='email' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikComponents
