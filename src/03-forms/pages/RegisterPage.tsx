import {  FormEvent } from 'react'
import useForm from '../hooks/useForm'
import '../styles/styles.css'

const RegisterPage = () => {
  const { email, name, password1, password2,  form,  onChange, resetForm, isValidEmail } = useForm({
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
        <input 
          onChange={onChange} value={name} name='name' 
          type='text' placeholder='name' 
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span> The name field is required </span>}
        <input 
          onChange={onChange} value={email} 
          name='email' type='email' placeholder='email' 
          className={`${!isValidEmail(email) && 'has-error'}`}  
          />
        {!isValidEmail(email) && <span> Invalid Email. </span>}
        <input 
          onChange={onChange} value={password1} name='password1' 
          type='password' placeholder='password'
          className={`${password1.trim().length <= 0 && 'has-error'}`}
        />
        
        {password1.trim().length <= 0 && <span> The password field is required </span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span> The password should have at leats 6 characters</span>}
        <input 
          onChange={onChange} value={password2} name='password2' 
          type='password' placeholder='repeat password'
          className={`${password2.trim().length <= 0 && 'has-error'}`}
          />
        {password2.trim().length <= 0 && <span> The password field is required </span>}
        {password2.trim().length > 0 && (password1 !== password2)  && <span> The password must match</span>}
        
        <button type='submit'>Create</button>
        <button type='button' onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
}

export default RegisterPage
