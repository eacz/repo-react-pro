import { Form, Formik } from 'formik'
import { Checkbox, Input, Select } from '../components/Formik'
import formJson from '../data/custom-form.json'

const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik
        initialValues={{name: ''}}
        onSubmit={values => console.log(values)}
      >
        {({  }) => (
          <Form>
            {formJson.map(({type, name, placeholder, label}) => {
              return <Input key={name} type={type as any} name={name} label={label} placeholder={placeholder}  />
            })}
            <button type="submit"> Submit </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DynamicFormPage
