import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from "antd";
import { Link } from "react-router-dom"
import styles from "./videocontent.module.css";
import videos2 from "../../json/videos2.json";
export default function VideoContent2() {
    return (
        <div>
            <p className={styles.big_title}>VIDEO</p>
            <p className={styles.decoline}>—————————————— ᗦ↞◃ ——————————————</p>
            <div className={styles.btm_area}>
                <div className={styles.btm}>
                    <a>All</a>
                </div>
                <div className={styles.btm2}>
                    <a>Work</a>
                </div>
                <div className={styles.btm2}>
                    <a>Cooperation</a>
                </div>
            </div>
            <div>
                <Row gutter={[24, 24]}>
                    {videos2.map((item) => (
                        <Col key={item.id}
                            link={item.link}
                            name={item.name}
                            url={item.url}
                            sm={{ span: 24 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}
                        >
                            <div>
                                <div className={styles.img_area}>
                                    <a href={item.url} target='blank'>
                                        <img src='images/playbtm.png' className={styles.playbtm} />
                                    </a>
                                    <img src={item.link} className={styles.img} />

                                </div>
                                <p className={styles.img_name}>{item.name}</p>
                            </div>
                        </Col>
                    ))};
                </Row>
                <Link to={`/Video`} className={styles.menu_item}>
                    <button className={styles.numbtm}>1</button>
                </Link>
                <Link to={`/Video2`} className={styles.menu_item}>
                    <button className={styles.numbtm2}>2</button>
                </Link>
            </div>
        </div>
    );
}