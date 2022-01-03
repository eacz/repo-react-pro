import { ChangeEvent, useState } from "react"

const useForm = <T> (initState: T) => {
  const [form, setForm] = useState(initState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(s => ({...s, [e.target.name]: e.target.value}))
  }
  
  return {
    ...form,
    form,
    onChange
  }
}

export default useForm
