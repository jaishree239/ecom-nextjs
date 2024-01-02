import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/LoginSignUp.module.css'

interface Inputs {
    name: string
    email: string
    password: string
}

const LoginSignUp = () => {
    const [formName, setFormName] = useState('Sign Up')
    const { register, handleSubmit } = useForm<Inputs>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })
    const onHandleSubmit = (data: any) => {
        console.log('data', data)
    }
    return (
        <>
            <h1>{formName}</h1>
            <form className={styles.form}
                onSubmit={handleSubmit(onHandleSubmit)}>
                <div className={styles.field}>
                    <label className={styles.label}>Name</label>
                    <input {...register('name')} className={styles.input} type='text' />
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                    <input {...register('email')} className={styles.input} type='text' />
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Password</label>
                    <input {...register('password')} className={styles.input} type='text' />
                </div>
                <div>
                    {/* <button className={styles.btn} */}
                    <button className={`action === Log In ? ${styles.gray} : ${styles.btn} `}
                        type='submit'>
                        Sign Up
                    </button>
                    {/* <button className={`action === Sign Up ? ${styles.btn} : ${styles.gray} `}
                        type='submit'>
                        Log In
                    </button> */}
                </div>
            </form>
        </>

    )
}

export default LoginSignUp