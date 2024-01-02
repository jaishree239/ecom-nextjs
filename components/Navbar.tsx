import React from 'react';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import styles from '../styles/Navbar.module.css'



const Navbar = () => {
    const items = useSelector((state: RootState) => state.cart);
    // console.log('navbar comp', items)
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
            {/* <Link className={styles.navlink} href='/'>
                Home
            </Link> */}
            <Link className={styles.navlink} href='/cart'>
                Cart
            </Link>
            <Link className={styles.navlink} href='/dashboard'>
                Dashboard
            </Link>
            <span className={styles.cart__count}>Cart items: {items.length}</span>
        </div>
    );
};

export default Navbar;