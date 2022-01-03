import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'


interface formValues  {
  firstName: string,
  lastName: string,
  email: string,
}

const FormikBasicPage = () => {
  
  const validate = ({firstName, lastName, email}: formValues) => {
    const errors: FormikErrors<formValues> = {}
    if(!firstName.trim()){
      errors.firstName = 'Required'
    } else if (firstName.length>15){
      errors.firstName = 'Must be 15 characters or less'
    }

    if(!lastName.trim()){
      errors.lastName = 'Required'
    } else if (firstName.length>10){
      errors.lastName = 'Must be 10 characters or less'
    }

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors
  }
  
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => { console.log(values) },
    validate
  })

  return (
    <div>
      <h1>Formik basic tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" name='firstName' 
          value={values.firstName} onChange={handleChange} 
        />
        <span>First name is required</span>

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" name='lastName' 
          value={values.lastName} onChange={handleChange} 
        />
        <span>Last name is required</span>

        <label htmlFor="email">Email Address</label>
        <input 
          type="email" name='email' 
          value={values.email} onChange={handleChange} 
        />
        <span>Email is required</span>
        <span>Email is invalid</span>

        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default FormikBasicPage
