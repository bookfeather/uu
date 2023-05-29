import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingOutlined } from '@ant-design/icons';
import styles from './cartsummary.module.css';
import { selectCartItems } from "../../redux/cartSlice";
import CartModal from "../CartModal";

export default function CartSummary() {
    const [openModal, setOpenModal] = useState(false);
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ?
            cartItems.reduce((sum, item) => sum + item.qty, 0)
            : 0;
    const countMoney =(cartItems.length > 0) ?
            cartItems.reduce((sum, item) => sum + item.qty*item.price, 0)
            : 0; 

    

    return (
        <nav className={styles.cartSummary}>
            <div className={styles.count}>
                <p className={styles.count_text}>商品數：{count}件　合計：￥{countMoney}</p>
                <button 
                    className={styles.count_icon}
                    onClick={()=>{
                        setOpenModal(true);
                    }}
                >
                    <ShoppingOutlined 
                        style={{ fontSize: '40px', color: '#444444' }}
                        className={styles.count_cart}
                    />
                </button>
            </div>
            
            {openModal && <CartModal closeModal={setOpenModal}/>}
        </nav>
        
        
    );
}