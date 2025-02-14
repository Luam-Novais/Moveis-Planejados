import React from 'react'
import styles from './Input.module.css'

const Input = ({ id, type, label, value, error, onChange, onBlur, ...props}) => {
  return (
    <span>
        <label className={styles.label} htmlFor={id}>{label}</label>
        <input
        className={styles.input} 
        type={type}
        id={id} 
        name={id}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        {...props}
        />
        {error && <p>{error}</p>}
    </span>
  )
}

export default Input