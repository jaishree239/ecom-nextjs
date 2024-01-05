import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import styles from '../styles/RegisterSignUp.module.css'
import { useSignupUserMutation } from '../state/api/authApi'

interface Inputs {
    name: string
    email: string
    password: string
}

const SignUp: React.FC = () => {
    const [signupUser, { data, isLoading }] = useSignupUserMutation();
    console.log('data sign up', data)
    const { register, handleSubmit, formState: { errors }, setError } = useForm<Inputs>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onHandleSubmit = (values: any) => {
        // console.log('data', data)
        signupUser({ ...values });
    }
    return (
        <div>
            <form className={styles.form}
                onSubmit={handleSubmit(onHandleSubmit)}
            >
                <h1>Sign Up</h1>
                <div className={styles.field}>
                    <label className={styles.label}>Name</label>
                    <input {...register('name')} className={styles.input} type='text' />
                    {errors.name && (
                        <span className={styles.error}>{errors.name.message}</span>
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
                    <button className={styles.btn}
                        type='submit'>
                        Sign Up
                    </button>
                    <p>Already have an account ?</p>
                    {/* <span className={styles.loginsignup}>Login</span> */}
                    <Link href='/' className={styles.loginsignup}>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp