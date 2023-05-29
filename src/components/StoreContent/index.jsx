import styles from "./storecontent.module.css";
import { Row, Col } from "antd";
import GoodsItem from "../GoodsItem";
import CartSummary from "../CartSummary";
import {  ShoppingOutlined } from '@ant-design/icons';

export default function StoreContent({goods}) {
    return (
        <div>
            <p className={styles.big_title}>STORE</p>
            <p className={styles.decoline}>—————————————— ᗦ↞◃ ——————————————</p>
            <div className={styles.nav}>
                <div className={styles.btm_area}>
                    <div className={styles.btm}>
                        <a className={styles.text}>All</a>
                    </div>
                    <div className={styles.btm2}>
                        <a className={styles.text}>Album</a>
                    </div>
                    <div className={styles.btm2}>
                        <a className={styles.text}>Merchandise</a>
                    </div>
                </div>
                <div className={styles.cart}>
                    <CartSummary />
                </div>
                
            </div>
            <div className={styles.goods}>
                <Row gutter={[24,24]}>
                {goods.map((good) =>(
                    <Col
                        key={good.id}
                        sm={{ span: 12 }} 
                        lg={{ span: 8 }}
                        xxl={{ span: 6 }}
                    >
                        <GoodsItem good={good} />
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    );
}