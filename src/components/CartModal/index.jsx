import { Modal, Button, Select} from "antd";
import { SendOutlined, CloseOutlined } from '@ant-design/icons';
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems } from "../../redux/cartSlice";

import styles from "./cartmodal.module.css";
import { selectCartItems } from "../../redux/cartSlice";
const { Option} = Select;

export default function CartModal ({ closeModal }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    
    return (
        <>
           
        <div className={styles.modal} >
            <div className={styles.container}>
                {cartItems.length === 0 ? (
                    <div className={styles.box1}>購物車內無商品</div>
                ) : (
                    cartItems.map(item =>(
                        <li key={item.id} className={styles.box2}>
                            <div className={styles.left}>
                                <div className={styles.img}>
                                    <img 
                                        alt={item.title}
                                        className={styles.image}
                                        src={item.image}
                                    />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.title}>{item.title}</div>
                                    
                                    <div>
                                    {"   "}
                                    <Select
                                    defaultValue={item.qty}
                                    onChange={(qty) => dispatch(addCartItems({
                                        id: item.id,
                                        title: item.title,
                                        image: item.image,
                                        price: item.price,
                                        countInStock: item.countInStock,
                                        qty,
                                    }))}
                                    >
                                    {[...Array(item.countInStock).keys()].map((x) => (
                                        <Option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </Option>
                                    ))}
                                    </Select>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <button onClick={() => dispatch(removeCartItems(item.id))} className={styles.closebtn}>
                                    <CloseOutlined 
                                        style={{ fontSize: '13px', color: '#b1b1b1' ,}}
                                        className={styles.closeicon}
                                    />
                                </button>
                            </div>
                        </li>
                    ))
                )}
                <button className={styles.btn} onClick={()=>closeModal(false)}>
                    <div className={styles.btntext} >
                        前往結帳
                    </div>
                    <SendOutlined 
                        style={{ fontSize: '20px', color: '#b1b1b1' ,}}
                        className={styles.carticon}
                    />
                </button>
            </div>
        </div> 
        </>
        
    )
}
