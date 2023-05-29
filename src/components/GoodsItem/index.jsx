// import { ShoppingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from './goodsitem.module.css';

export default function GoodsItem({ good }) {

    return (
        <div className={styles.item}>
            <Link to={`/id/${good.id}`}>
                <img 
                    style={{ width: '100%' }}
                    src={good.image} 
                    alt={good.title} />
            </Link>
            <Link to={`/id/${good.id}`}>
                <div className={styles.Info}>
                    <p className={styles.title}>
                        {good.title}
                    </p>
                    <p className={styles.category}>
                        {good.category}
                    </p>
                    <p className={styles.seller}>
                        {good.seller}
                    </p>
                    <span className={styles.price}>￥{good.price}</span>
                </div>
            </Link>
            {/* <Link to="/ " target="_blank">
                <ShoppingOutlined />
            </Link> */}
            
        </div>
    )
}