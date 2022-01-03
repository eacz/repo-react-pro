import { ChangeEvent, useState } from 'react'

const useForm = <T>(initState: T) => {
  const [form, setForm] = useState(initState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const resetForm = () => setForm({ ...initState })

  const isValidEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  return {
    ...form,
    form,
    onChange,
    resetForm,
    isValidEmail
  }
}

export default useForm
