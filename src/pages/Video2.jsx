import Header from "../components/Header"
import VideoContent2 from "../components/VideoContent2";
import Footer from "../components/Footer"
import videos2 from "../json/videos2.json";
function Video2() {
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <VideoContent2
            Video={videos2}
            className="layoutContent"/>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Video2