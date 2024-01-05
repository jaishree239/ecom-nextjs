import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import styles from '../styles/RegisterSignUp.module.css'
import { useSigninUserMutation } from '../state/api/authApi'

interface Inputs {
    email: string
    password: string
}

const Register: React.FC = () => {
    const [signinUser, { data, isLoading }] = useSigninUserMutation();
    console.log('data register', data)
    const { register, handleSubmit, formState: { errors }, setError } = useForm<Inputs>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onHandleSubmit = (values: any) => {
        // console.log('data', data)
        signinUser({ ...values });
    }
    return (
        <div>
            <form className={styles.form}
                onSubmit={handleSubmit(onHandleSubmit)}
            >
                <h1>Login </h1>
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
                    <button className={styles.btn}
                        type='submit'>
                        Login
                    </button>
                    <p>Don't have an account ?</p>
                    <Link href='/signup' className={styles.loginsignup}>Sign Up</Link>
                </div>
            </form>
        </div>
    )
}

export default Register