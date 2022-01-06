import { useField } from 'formik';

interface Props {
  label?: string,
  name: string,
  placeholder?: string,
  [x:string]: any
}

const Checkbox = ({label, ...props} : Props) => {
  const [field, meta] = useField({...props, type: 'checkbox'})

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  )
}

export default Checkbox
