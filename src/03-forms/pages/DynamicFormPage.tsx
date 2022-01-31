import { Form, Formik } from 'formik'
import { Checkbox, Input, Select } from '../components/Formik'
import formJson from '../data/custom-form.json'

const initialValues: {[key: string]: any} = {}

for (const input  of formJson) {
  initialValues[input.name] = input.value
}

const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Forms</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        {({ handleReset }) => (
          <Form noValidate >
            {formJson.map(({type, name, placeholder, label}) => {
              return <Input key={name} type={type as any} name={name} label={label} placeholder={placeholder}  />
            })}
            <button type="submit"> Submit </button>
            <button type="button" onClick={handleReset} > Reset </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DynamicFormPage
