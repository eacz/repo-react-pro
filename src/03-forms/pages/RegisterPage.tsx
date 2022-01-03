import {  FormEvent } from 'react'
import useForm from '../hooks/useForm'
import '../styles/styles.css'

const RegisterPage = () => {
  const { email, name, password1, password2,  form,  onChange } = useForm({
    email: '', name: '', password1: '', password2: '', 
  })

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit} noValidate >
        <input onChange={onChange} value={name} name='name' type='text' placeholder='name' />
        <input onChange={onChange} value={email} name='email' type='email' placeholder='email' />
        <input onChange={onChange} value={password1} name='password1' type='password' placeholder='password' />
        <input onChange={onChange} value={password2} name='password2' type='password' placeholder='repeat password' />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default RegisterPage
