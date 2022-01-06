import { useField } from "formik"

interface Props {
  label?: string,
  name: string,
  type?: 'text' | 'email' | 'password',
  placeholder?: string,
  [x:string]: any
}

const Input = ({label, ...props} : Props) => {
  const [field, meta] = useField(props)
  
  return (
    <>
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <input 
        {...field} {...props} 
      />
      {meta.touched && meta.error && <span>{meta.error}</span> }
    </>
  )
}

export default Input
