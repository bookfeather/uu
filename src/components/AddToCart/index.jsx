import { Button } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtocart.module.css"

export default function AddToCart({ good, qty }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartItems({
      id: good.id,
      title: good.title,
      image: good.image,
      price: good.price,
      countInStock: good.countInStock,
      qty,
    }))
  };

  return (
    <Button type="primary" className={styles.btn} onClick={addToCart}>
      加入購物車
    </Button>
  );
}