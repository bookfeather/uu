import Header from "../components/Header";
import NewsContent from "../components/NewsContent";
import Footer from "../components/Footer";
function News() {

    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <NewsContent className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>
    );
}

export default News