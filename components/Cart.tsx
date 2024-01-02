import React from 'react';
import { RootState, AppDispatch } from '../state/store';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../state/slice/cartSlice';
import Navbar from './Navbar'
import styles from '../styles/Cart.module.css'

const Cart: React.FC = () => {
    const products = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch<AppDispatch>();
    console.log('cart comp products', products)


    return (
        <div>
            <Navbar />
            <h1 className={styles.card__heading}>Cart</h1>
            <div className={styles.cart__wrapper}>
                {products && products.map((product) => (
                    <div key={product.id} className={styles.cart__card}>
                        <img style={{ height: '80px' }} src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className={styles.cart__btn}
                            onClick={() => dispatch(remove(product.id))}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;