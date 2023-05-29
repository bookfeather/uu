import styles from "./content.module.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { ArrowReturnRight } from 'react-bootstrap-icons';
import { Link } from "react-router-dom"
export default function Content() {
    return (

        <div className={styles.content}>
           <Carousel>
                <Carousel.Item>
                    <img src="/images/2ndad.jpg" className={styles.main_visual} />
                    <Carousel.Caption className={styles.Carousel_textarea}>
                        <h2 className={styles.Carousel_text1}>2nd album『回送行き』</h2>
                        <p className={styles.Carousel_text2}>2023年4月19日
                            2nd album發售。</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/11.jpg" className={styles.main_visual} />

                    <Carousel.Caption className={styles.Carousel_textarea}>
                        <h2 className={styles.Carousel_text1}>一緒くた</h2>
                        <p className={styles.Carousel_text2}>第11支MV，收錄於2nd album『回送行き』。</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/10.jpg" className={styles.main_visual} />

                    <Carousel.Caption className={styles.Carousel_textarea}>
                        <h2  className={styles.Carousel_text1}>売らん哉</h2>
                        <p className={styles.Carousel_text2}>第10支MV，收錄於2nd album『回送行き』。</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div id="news">
                <div className={styles.content_up}>
                    <h1 className={styles.content_title}>NEWS</h1>
                    <Link to={`/News/#`} className={styles.content_more}>more...</Link>
                    
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2023.03.30</h6>
                    </div>
                    <a href="https://twitter.com/uutubo/status/1641749678281687041" className={styles.news_text1} target="_blank">將於明日3/31(五)19:30先行公開2nd album『回送行き』試聽動畫。<ArrowReturnRight /></a>
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2023.03.15</h6>
                    </div>
                    <h4 className={styles.news_text2}>2nd album『回送行き』初期購入特典公開。<ArrowReturnRight /></h4>
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2023.03.25</h6>
                    </div>
                    <h4 className={styles.news_text3}>【公告】將於2023年4月19日發售2nd album『回送行き』。<ArrowReturnRight /></h4>
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2023.03.25</h6>
                    </div>
                    <h4 className={styles.news_text4}>Music Vedio『孑孒』公開。<ArrowReturnRight /></h4>
                </div>
            </div>
            <div id="vedio">
                <div className={styles.content_up}>
                    <h1 className={styles.content_title}>VEDIO</h1>
                    <Link to={`/Video`} className={styles.content_more}>more...</Link>

                </div>
                <div className={styles.home_video}>

                    <iframe width="320" height="210" src="https://www.youtube.com/embed/MwdD28EE580" title="YouTube video player" className={styles.video_viewer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="320" height="210" src="https://www.youtube.com/embed/hIi2N15UuIU" title="YouTube video player" className={styles.video_viewer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="320" height="210" src="https://www.youtube.com/embed/NwxHuGiWoz0" title="YouTube video player" className={styles.video_viewer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div id="store">
                <div id="news" className={styles.content_up}>
                    <h1 className={styles.content_title}>STORE</h1>
                    <Link to={`/Store`} className={styles.content_more}>more...</Link>
                </div>
                <div className={styles.home_store}>
                    <img src="/images/CD3.jpg" className={styles.home_store_img} />
                    <img src="/images/CD2.jpg" className={styles.home_store_img} />
                    <img src="/images/shiori.jpg" className={styles.home_store_img} />
                    <img src="/images/T1.jpg" className={styles.home_store_img} />
                </div>
            </div>
        </div>

    );
}