import Header from "../components/Header"
import VideoContent from "../components/VideoContent";
import Footer from "../components/Footer"
import videos from "../json/videos.json";
function Video() {
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <VideoContent 
            Video={videos}
            className="layoutContent"/>
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Video