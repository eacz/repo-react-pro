import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Checkbox from '../components/Checkbox'
import Input from '../components/Input'
import Select from '../components/Select'
import '../styles/styles.css'

const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', terms: false, jobType: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'should have 15 characters or less').required('required'),
          lastName: Yup.string().max(10, 'should have 10 characters or less').required('required'),
          email: Yup.string().email('Invalid email').required('required'),
          terms: Yup.boolean().oneOf([true], 'You should acept these terms'),
          jobType: Yup.string()
            .required()
            .notOneOf(['developer', ''], 'This option is not allowed right now'),
        })}
      >
        {(_formik) => (
          <Form>

            <Input label='First Name' name='firstName' type='text' placeholder='First Name' />
            <Input label='Last Name' name='lastName' type='text' placeholder='Last Name' />
            <Input label="Email" name='email' type='email' placeholder="Email" />
            
            <Select name="jobType" label="Job type">
              <option value=''>Pick something</option>
              <option value='frontend'>FrontEnd Developer</option>
              <option value='backend'>Backend Developer</option>
              <option value='developer'>Developer</option>
            </Select>

            <Checkbox name='terms' label='Terms and conditions' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikAbstraction
