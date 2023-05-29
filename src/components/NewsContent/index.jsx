import styles from "./newscontent.module.css";
import { ArrowReturnRight } from 'react-bootstrap-icons';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function NewsContent() {

    return (
        <div>
            <p className={styles.big_title}>NEWS</p>
            <p className={styles.decoline}>—————————————— ᗦ↞◃ ——————————————</p>
            <div id="news">
                <div className={styles.btm_area}>
                    <div className={styles.btm}>All</div>

                    <div className={styles.btm2}>Preview</div>

                    <div className={styles.btm2}>Notice</div>
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2023.03.30</h6>
                    </div>
                    <a href="https://twitter.com/uutubo/status/1641749678281687041" className={styles.news_text} target="_blank">將於明日3/31(五)19:30先行公開2nd album『回送行き』試聽動畫。<ArrowReturnRight className={styles.arrow}/></a>
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2023.03.15</h6>
                    </div>
                    <h4 className={styles.news_text}>2nd album『回送行き』初期購入特典公開。<ArrowReturnRight className={styles.arrow}/></h4>
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2023.03.25</h6>
                    </div>
                    <h4 className={styles.news_text}>【公告】將於2023年4月19日發售2nd album『回送行き』。<ArrowReturnRight className={styles.arrow}/></h4>
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2023.03.25</h6>
                    </div>
                    <h4 className={styles.news_text}>Music Vedio『孑孒』公開。<ArrowReturnRight className={styles.arrow}/></h4>
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2022.12.13</h6>
                    </div>
                    <h4 className={styles.news_text}>於各大音樂串流平台公開『一緒くた』。<ArrowReturnRight className={styles.arrow}/></h4>
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2022.12.11</h6>
                    </div>
                    <h4 className={styles.news_text}>Music Vedio『一緒くた』公開。<ArrowReturnRight className={styles.arrow}/></h4>
                </div>
                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2022.12.07</h6>
                    </div>
                    <h4 className={styles.news_text}>cover曲『/ x0o0x_』公開於twitter。<ArrowReturnRight className={styles.arrow}/></h4>
                </div>

                <div className={styles.text_area}>
                    <div className={styles.date_bg}>
                        <h6 className={styles.date}>2022.09.08</h6>
                    </div>
                    <h4 className={styles.news_text}>於各大音樂串流平台公開Comit99限定CD『家苞』曲目。<ArrowReturnRight className={styles.arrow}/></h4>
                </div>
            </div>
            <button className={styles.numbtm}>1</button>
            <button className={styles.numbtm}>2</button>
            <div className={styles.twitter}>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="uutubo"
                    options={{ height: 600, width: 450, }}
                    className={styles.twitterarea}
                    theme="dark"
                />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="akisute0701"
                    options={{ height: 600, width: 450, }}
                    theme="dark"
                />
            </div>
        </div>
    );
}