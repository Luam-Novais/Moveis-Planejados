import React, { useState } from 'react'

const types = {
    cep:{
        regex: /^\d{2}\d{3}-?\d{3}$/,
        message:'CEP inválido.'
    },
    email:{
        regex:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
        message: 'Email inválido.'
    },
    telefone:{
        regex: /^(?:\(?\d{2}\)?\s?)?9\d{4}-?\d{4}$/,
        message: 'Número inválido.'
    }
}
const useForm = (type) => {
    const [value,setValue] = useState('')
    const [error,setError] = useState(null)

    function validate(value){
        if(value.length === 0){
            setError('Informe um valor.')
            return false
        }
        else if(!types[type].regex.test(value)){
            setError(types[type].message)
            return false
        }else{
            setError(null)
            return true
        }
    }

    function handleChange({target}){
        setValue(target.value)
        if(error) validate(target.value)
    }
  return {
    value, 
    setValue, 
    error, 
    setError,
    handleChange,
    onBlur: ({target})=> validate(target.value)
  }
}

export default useForm