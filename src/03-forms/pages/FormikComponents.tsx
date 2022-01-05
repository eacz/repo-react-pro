import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', terms: false, jobType: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'should have 15 characters or less').required('required'),
          lastName: Yup.string().max(10, 'should have 10 characters or less').required('required'),
          email: Yup.string().email('Invalid email').required('required'),
          terms: Yup.boolean().oneOf([true], 'You should acept these terms'),
          jobType: Yup.string().required().notOneOf(['developer', ''], 'This option is not allowed right now')
        })}
      >
        {(_formik) => (
          <Form>
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage component='span' name='firstName' />

            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage component='span' name='lastName' />

            <label htmlFor='email'>Email Address</label>
            <Field name='email' type='email' />
            <ErrorMessage component='span' name='email' />

            <label htmlFor='jobType'>Job type</label>
            <Field name='jobType' as='select'>
              <option value=''>Pick something</option>
              <option value='frontend'>FrontEnd Developer</option>
              <option value='backend'>Backend Developer</option>
              <option value='developer'>Developer</option>
            </Field>
            <ErrorMessage component='span' name='jobType' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms and Conditions
            </label>
            <ErrorMessage component='span' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikComponents
