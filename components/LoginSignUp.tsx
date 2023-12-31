import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from '../styles/LoginSignUp.module.css'

interface Inputs {
    username: string
    email: string
    password: string
}

const validationSchema = yup.object({
    username: yup.string().required('Please enter Name'),
    email: yup.string().required('Please enter email').email('Invalid email format'),
    password: yup.string().required('Please enter password'),
}).required()

const LoginSignUp: React.FC = () => {
    // const [formName, setFormName] = useState('Login')
    const { register, handleSubmit, formState: { errors }, setError } = useForm<Inputs>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    })
    // console.log('errors', errors)
    const onHandleSubmit = (data: any) => {
        // console.log('data', data)
        axios.post('https://api.realworld.io/api/users', { user: data })
            .then(response => {
                console.log('response', response)
            }).catch(errors => {
                console.log('errors', errors)
                if (errors.response.data.errors.username) {
                    setError('username', { type: 'server', message: errors.response.data.errors.username[0] })
                }
                if (errors.response.data.errors.email) {
                    setError('email', { type: 'server', message: errors.response.data.errors.email[0] })
                }
                if (errors.response.data.errors.password) {
                    setError('password', { type: 'server', message: errors.response.data.errors.password[0] })
                }
            })
    }
    return (
        <>
            <form className={styles.form}
                onSubmit={handleSubmit(onHandleSubmit)}>
                {/* <h1>{formName}</h1> */}
                <h1>Sign Up</h1>
                <div className={styles.field}>
                    <label className={styles.label}>Name</label>
                    <input {...register('username')} className={styles.input} type='text' />
                    {errors.username && (
                        <span className={styles.error}>{errors.username.message}</span>
                    )}
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                    <input {...register('email')} className={styles.input} type='text' />
                    {errors.email && (
                        <span className={styles.error}>{errors.email.message}</span>
                    )}
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Password</label>
                    <input {...register('password')} className={styles.input} type='text' />
                    {errors.password && (
                        <span className={styles.error}>{errors.password.message}</span>
                    )}
                </div>
                <div>
                    {/* <button className={styles.btn} */}
                    {/* <button className={`action === Log In ? ${styles.gray} : ${styles.btn} `}
                        type='submit'>
                        Sign Up
                    </button> */}
                    <button className={styles.btn}
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