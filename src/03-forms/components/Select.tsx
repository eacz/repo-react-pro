import { useField } from 'formik';

interface Props {
  label?: string,
  name: string,
  placeholder?: string,
  [x:string]: any
}

const Select = ({label, ...props}: Props) => {
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  )
}

export default Select
