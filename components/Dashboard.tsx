import React, { useEffect } from 'react'
import { RootState, AppDispatch } from '../state/store';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Dashboard.module.css'
import { add } from '../state/slice/cartSlice';
import Navbar from './Navbar'
// import { getProduct } from '../state/slice/productSlice'
import { useGetAllProductsQuery } from "../state/api/productApi";

interface Product {
    id: number;
    price: number;
    title: string;
    image: string;
}

const Dashboard: React.FC = () => {
    // const products = useSelector((state: RootState) => state.product.data)
    const dispatch = useDispatch<AppDispatch>();

    // useEffect(() => {
    //     dispatch(getProduct())
    // }, [])

    const { data: products } = useGetAllProductsQuery();
    // console.log('data 1', products)
    // const products: any = [];

    return (
        <div>
            <Navbar />
            <div className={styles.card__wrapper}>{products?.length > 0 && products.map((product: Product) => {
                return (
                    <div key={product.id} className={styles.card}>
                        <img className={styles.card__image} src={product.image} alt='' />
                        <div className={styles.card__title__price}>
                            <h4 className={styles.card__title}>{product.title}</h4>
                            <h5 className={styles.card__price}>{product.price}</h5>
                        </div>
                        <button className={styles.card__btn}
                            onClick={() => dispatch(add(product))}
                        >Add To Cart</button>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default Dashboard

