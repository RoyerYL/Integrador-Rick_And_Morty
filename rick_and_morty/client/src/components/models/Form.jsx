import React, { useState } from 'react'
import validar from '../scripts/Validation'
import style from '../style/Form.module.css'


export default function Form(props){
const [form,setForm]=useState({
    email:"",
    password:"",
})
const [errors,setErrors]=useState({
    email:"",
    password:"",
})

const handleChange=(event)=>{
    const property = event.target.name;
    const value = event.target.value;

    setForm({...form,[property]:value});//cambio Form..
    // validar(form,setErrors,errors);
    validar({...form,[property]:value},setErrors,errors);



}

const submitHandler=(event)=>{
    event.preventDefault()//evitamos que submit recargue la pagina
    props.login(form)
}

    return (
        
<form className={style.form}>
    <div>
        <label htmlFor="email">Email: </label>
        <input type="text" name='email' value={form.username} onChange={handleChange}/>
    </div>
    <span>{errors.email}</span>

    <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name='password' value={form.password} onChange={handleChange}/>
    </div>
        <span>{errors.password}</span>

    <div className={style.botonLogin}>

        <button type='submit' onClick={submitHandler}> Login </button>
    </div>

</form>
    )
}
