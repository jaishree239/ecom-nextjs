import React, { useState, useEffect } from 'react'
import styles from './Dashboard.module.css'

interface Product {
    id: number;
    price: number;
    title: string;
    image: string;
}

const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])
    const apiCall = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const json = await res.json();
        // console.log('json', json)
        // console.log('products', products)
        setProducts(json)
    }

    useEffect(() => {
        apiCall()
    }, [])

    return (
        <>
            <div className={styles.header}>
                <h4>Home</h4>
                <h4>Cart</h4>
                <span>0</span>
            </div>
            <div className={styles.card__wrapper}>{products.length > 0 && products.map((item) => {
                return (
                    <div key={item.id} className={styles.card__item}>
                        <img className={styles.card__image} src={item.image} alt='' />
                        <div className={styles.card__title__price}>
                            <h4 className={styles.card__title}>{item.title}</h4>
                            <h5 className={styles.card__price}>{item.price}</h5>
                        </div>
                        <button className={styles.card__btn}>Add To Cart</button>
                    </div>
                )
            })}</div>
        </>
    )
}

export default Dashboard

