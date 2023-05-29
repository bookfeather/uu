import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from "antd";
import styles from "./videocontent.module.css";
import videos from "../../json/videos.json";
export default function VideoContent() {
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
                    {videos.map((item) => (
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
                <button className={styles.numbtm}>1</button>
                <button className={styles.numbtm}>2</button>
            </div>
        </div>
    );
}