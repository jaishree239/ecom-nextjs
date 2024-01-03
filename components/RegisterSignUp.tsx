import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/RegisterSignUp.module.css'

interface Inputs {
    username: string
    email: string
    password: string
}

const RegisterSignUp: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<Inputs>({
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    })
    return (
        <div>
            <form className={styles.form}
            // onSubmit={handleSubmit(onHandleSubmit)}
            >
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
        </div>
    )
}

export default RegisterSignUp