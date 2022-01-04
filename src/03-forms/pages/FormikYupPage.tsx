import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

interface formValues  {
  firstName: string,
  lastName: string,
  email: string,
}

const FormikYupPage = () => {
  
  const { handleChange, handleBlur, values, handleSubmit, errors, touched } = useFormik<formValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => { console.log(values) },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'should have 15 characters or less').required('required'),
      lastName: Yup.string().max(10, 'should have 10 characters or less').required('required'),
      email: Yup.string().email('Invalid email').required('required'),
    })
  })

  return (
    <div>
      <h1>Formik + Yup</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" name='firstName' 
          value={values.firstName} onChange={handleChange} onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" name='lastName' 
          value={values.lastName} onChange={handleChange} onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input 
          type="email" name='email' 
          value={values.email} onChange={handleChange} onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default FormikYupPage
