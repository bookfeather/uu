import styles from "./teamcontent.module.css";
import { Link } from "react-router-dom"
import { Twitter, Youtube, Instagram, Spotify } from 'react-bootstrap-icons';
export default function TeamContent() {
    return (
        <div>
            <p className={styles.big_title}>TEAM</p>
            <p className={styles.decoline}>—————————————— ᗦ↞◃ ——————————————</p>
            <div className={styles.content_up}>
                <h1 className={styles.content_title}>ABOUT</h1>
            </div>
            <div className={styles.text_area}>
                <p className={styles.text}>千川帰海是悒うつぼ(uutubo) 及谷口修(Syu Taniguchi)組成的團體，由悒うつぼ負責作詞、作曲、編曲、演唱、混音，谷口修負責繪畫及製作動畫，自2018年5月起在網路上發表他們的作品，於2020年12月發行第一張專輯『噓八百』，並將於2023年4月發行第二張專輯『回送行き』。</p>
            </div>
            <div className={styles.pro_area}>
                <div className={styles.uutubo}>
                    <img src="/images/uutubo_prof.jpg" className={styles.profile} />
                    <p className={styles.pro_text}>悒うつぼ</p>
                    <div className={styles.btm_area}>
                        <Link to="https://twitter.com/uutubo" target="_blank"> <Twitter size={50} /></Link>
                        <Link to="https://www.instagram.com/uutubo_japan/" target="_blank"><Instagram size={50} /></Link>
                        <Link to="https://www.youtube.com/channel/UCQjaacha2PwTNNYQfr0-KpA" target="_blank"><Youtube size={50} /></Link>
                        <Link to="https://open.spotify.com/artist/46JcLfNgVQ8zNtSZU3vXB1" target="_blank"><Spotify size={50} /></Link>
                    </div>
                </div>
                <div className={styles.taniguchi}>
                    <img src="/images/taniguchi.jpg" className={styles.profile} />
                    <p className={styles.pro_text}>谷口修</p>
                    <div className={styles.btm_area}>
                        <Link to="https://twitter.com/akisute0701" target="_blank"> <Twitter size={50} /></Link>
                        <Link to="https://www.instagram.com/akisute_0701/" target="_blank"><Instagram size={50} /></Link>
                    </div>
                </div>
            </div>
            <div className={styles.feedback}>
                <div className={styles.content_up}>
                    <h1 className={styles.content_title}>FEEDBACK</h1>
                </div>
                <div className={styles.text_box}>
                    <input type="text" className={styles.input}/>
                </div>
                <div className={styles.btm}>
                <p>SEND</p>
                </div>
            </div>
        </div>
    );
}