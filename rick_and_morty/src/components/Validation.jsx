export default function valid(form,setErrors,errors){
    let updateErrors={...errors}
    

    validarPassword(form,setErrors,updateErrors)
    validarMail(form,setErrors,updateErrors)

    setErrors(updateErrors)

    }

    function validarPassword(form,setErrors,errors){
        if(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ .test(form.password))
        errors.password=""
        else errors.password="debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos."
    
    }

    function validarMail(form,setErrors,errors) {

        if(!form.email)errors.email="email vacio"
        else errors.email=""
        
        if( /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ .test(form.email))
        errors.email=""
        else errors.email="email invalido"
        
               
    }

